import { useEffect, useRef } from 'react';
import { Renderer, Geometry, Program as ShaderProgram, Mesh, Vec3, Vec2, Camera } from 'ogl';
import vertex from './vert';
import fragment from './frag1';

import Stats from 'stats.js';

import './canvas.scss';
import Rotated from './../../rotated/Rotated';


export const uniforms = {
  uTime: { value: 0 },
  mouse: { value: new Vec2(0) },
  boxSize: { value: new Vec3(1) },
  camPos: { value: new Vec3(0, 2, 5) },
  resolution: {
    value: new Vec2(window.innerWidth * 0.6, window.innerHeight),
  },
  boxFactor: { value: 1 },
  sphereFactor: { value: 0.5 },
};

// to change its unifroms from out side
export let shader;


const Canvas = () => {
  const canvas = useRef();

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const renderer = new Renderer({
      width: window.innerWidth * 0.6,
      height: window.innerHeight,
      canvas: canvas.current,
    });

    const stats = new Stats();
    document.body.appendChild(stats.dom);

    const gl = renderer.gl;

    const camera = new Camera(gl);
    // camera.position.set(0, 2, 4);
    camera.position.set(0, 0, 0);

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });

    shader = new ShaderProgram(gl, {
      vertex,
      fragment,
      uniforms,
    });

    const mesh = new Mesh(gl, { geometry, shader });

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth * 0.6, window.innerHeight);
      shader.uniforms.resolution.value = new Vec2(
        window.innerWidth * 0.6,
        window.innerHeight
      );
    });

    requestAnimationFrame(update);

    function update(time) {
      renderer.render({ scene: mesh });

      stats.update();

      shader.uniforms.uTime.value = time / 1000;

      requestAnimationFrame(update);
    }
  }, []);

  return (
    <div id="canvas-container">
      <div className="template">
        <Rotated>
          <div className="top"></div>
        </Rotated>
        <Rotated>
          <div className="bottom"></div>
        </Rotated>
        <Rotated>
          <div className="left"></div>
        </Rotated>
        <Rotated>
          <div className="right"></div>
        </Rotated>
        <div id="canvas-wrapper">
          <canvas ref={canvas}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
