import gsap from 'gsap';
import { values } from '../components/layout/canvas/Canvas';
import { routes } from './Routes';
import useStore from './../store/store';

export const animationDuration = 1000;

export const enter = (elem, path) => {
  const setTemplateReverse = useStore.getState().setTemplateReverse;
  const isTemplateReverse = useStore.getState().isTemplateReverse;

  setTemplateReverse(!isTemplateReverse);

  if (path === routes.works.path) {
    gsap.to(values, {
      duration: 2,
      boxFactor: 0.5,
      sphereFactor: 1,
      ease: 'Power3.easeInOut',
    });
    gsap.to(document.getElementById('canvas-container'), {
      duration: 2,
      marginRight: '40%',
      ease: 'Power3.easeInOut',
    });
  } else if (path === routes.home.path) {
    gsap.to(values, {
      duration: 2,
      boxFactor: 1,
      sphereFactor: 0.5,
      ease: 'Power3.easeInOut',
    });
    gsap.to(document.getElementById('canvas-container'), {
      duration: 2,
      marginRight: '0%',
      ease: 'Power3.easeInOut',
    });
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
