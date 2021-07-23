import gsap from 'gsap';
import { routes } from './Routes';
import useStore from './../store/store';

import { shader } from '../components/layout/canvas/Canvas';

export const animationDuration = 1000;

export const enter = (elem, path) => {
  const setTemplateReverse = useStore.getState().setTemplateReverse;
  const isTemplateReverse = useStore.getState().isTemplateReverse;

  setTemplateReverse(!isTemplateReverse);

  // set css angle variable to reverse
  document
    .querySelector('#root')
    .style.setProperty('--angle', isTemplateReverse ? '-2deg' : '2deg');

  if (path === routes.works.path) {
    // send this function to the end of call stack so that the shader is rendered
    setTimeout(() => {
      gsap.to(shader.uniforms.boxFactor, {
        duration: 2,
        value: 0.5,
        ease: 'Power3.easeInOut',
      });
      gsap.to(shader.uniforms.sphereFactor, {
        duration: 2,
        value: 1,
        ease: 'Power3.easeInOut',
      });
    }, 0);
    // gsap.to(document.getElementById('canvas-container'), {
    //   duration: 2,
    //   marginRight: '40%',
    //   ease: 'Power3.easeInOut',
    // });
  } else if (path === routes.home.path) {
    // send this function to the end of call stack so that the shader is rendered
    setTimeout(() => {
      gsap.to(shader.uniforms.boxFactor, {
        duration: 2,
        value: 1,
        ease: 'Power3.easeInOut',
      });
      gsap.to(shader.uniforms.sphereFactor, {
        duration: 2,
        value: 0.5,
        ease: 'Power3.easeInOut',
      });
    }, 0);
    // gsap.to(document.getElementById('canvas-container'), {
    //   duration: 2,
    //   marginRight: '0%',
    //   ease: 'Power3.easeInOut',
    // });
  }

  gsap.fromTo(
    elem,
    { opacity: 0, duration: animationDuration / 1000 },
    { opacity: 1 }
  );
};

export const exit = (elem, path) => {
  gsap.fromTo(
    elem,
    { opacity: 1, duration: animationDuration / 1000 },
    { opacity: 0 }
  );
};
