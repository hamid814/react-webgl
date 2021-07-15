import gsap from 'gsap';

import useStore from '../../store/store';

const Selectable = ({ children }) => {
  const setMouseActive = useStore((state) => state.setMouseActive);

  const onmouseenter = () => {
    setMouseActive(true);
  };

  const onmouseleave = (e) => {
    setMouseActive(false);

    gsap.to(e.target, {
      x: 0,
      y: 0,
      duration: 0.3,
    });
  };

  const onmousemove = (e) => {
    const itemPos = e.target.getBoundingClientRect();

    const xPer =
      (e.nativeEvent.offsetX - itemPos.width / 2) / (itemPos.width / 2);

    const yPer =
      (e.nativeEvent.offsetY - itemPos.height / 2) / (itemPos.height / 2);

    gsap.to(e.target, {
      x: xPer * 10,
      y: yPer * 10,
      duration: 0.2,
    });
  };

  return (
    <span
      onMouseEnter={onmouseenter}
      onMouseLeave={onmouseleave}
      onMouseMove={onmousemove}
    >
      {children}
    </span>
  );
};

export default Selectable;
