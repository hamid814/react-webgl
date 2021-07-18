import gsap from 'gsap';
import { values } from '../components/layout/canvas/Canvas';
import { routes } from './Routes';

export const animationDuration = 1000;

export const enter = (elem, path) => {
  if (path === routes.works.path) {
    gsap.to(values, {
      duration: 2,
      boxFactor: 0.5,
      sphereFactor: 1,
    });
  } else if (path === routes.home.path) {
    gsap.to(values, {
      duration: 2,
      boxFactor: 1,
      sphereFactor: 0.5,
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
