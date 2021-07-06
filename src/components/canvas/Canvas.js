import { useEffect, useRef } from 'react';
import {
  Renderer,
  Geometry,
  Program,
  Mesh,
  Vec3,
  Vec2,
  Orbit,
  Camera,
} from 'ogl';
import vertex from './vert';
import fragment from './frag1';

import './style.css';

const Canvas = () => {
  const canvas = useRef();

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const renderer = new Renderer({
      width: window.innerWidth,
      height: window.innerHeight,
      canvas: canvas.current,
    });

    const gl = renderer.gl;

    const camera = new Camera(gl);
    camera.position.set(0, 2, 4);

    const controls = new Orbit(camera, {
      target: new Vec3(0),
    });

    const geometry = new Geometry(gl, {
      position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) },
      uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        boxSize: { value: new Vec3(1) },
        camPos: { value: new Vec3(0, 2, 5) },
        resolution: { value: new Vec2(window.innerWidth, window.innerHeight) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    requestAnimationFrame(update);

    function update(time) {
      renderer.render({ scene: mesh });

      controls.update();

      program.uniforms.uTime.value = time / 1000;

      requestAnimationFrame(update);
    }
  }, []);

  return <canvas ref={canvas}></canvas>;
};

export default Canvas;
