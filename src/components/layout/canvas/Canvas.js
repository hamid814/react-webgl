import { useEffect, useRef } from 'react';
import { Renderer, Geometry, Program, Mesh, Vec3, Vec2, Camera } from 'ogl';
import vertex from './vert';
import fragment from './frag1';

import Stats from 'stats.js';

import './canvas.scss';

export const values = {
  mouse: new Vec2(window.innerWidth / 2, window.innerHeight / 2),
  boxFactor: 1,
  sphereFactor: 0.5,
};

const valueNames = Object.keys(values);

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

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        mouse: { value: new Vec2(0) },
        boxSize: { value: new Vec3(1) },
        camPos: { value: new Vec3(0, 2, 5) },
        resolution: {
          value: new Vec2(window.innerWidth * 0.6, window.innerHeight),
        },
        boxFactor: { value: values.boxFactor },
        sphereFactor: { value: values.sphereFactor },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth * 0.6, window.innerHeight);
      program.uniforms.resolution.value = new Vec2(
        window.innerWidth * 0.6,
        window.innerHeight
      );
    });

    requestAnimationFrame(update);

    function update(time) {
      renderer.render({ scene: mesh });

      stats.update();

      program.uniforms.uTime.value = time / 1000;

      // set "values" to uniforms
      valueNames.forEach((key) => {
        program.uniforms[key].value = values[key];
      });

      requestAnimationFrame(update);
    }
  }, []);

  return (
    <div id="canvas-container">
      <div className="template">
        <span className="top"></span>
        <span className="bottom"></span>
        <span className="left"></span>
        <span className="right"></span>
        <div id="canvas-wrapper">
          <canvas ref={canvas}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
