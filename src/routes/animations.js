import gsap from 'gsap';

export const animationDuration = 1000;

export const enter = (elem, path) => {
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
