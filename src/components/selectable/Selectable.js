import gsap from 'gsap';

import useStore from '../../store/store';

const Selectable = ({ children }) => {
  const setMouseActive = useStore((state) => state.setMouseActive);
  const setMouseActivePos = useStore((state) => state.setMouseActivePos);

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
    const curX =
      itemPos.left + xPer * 0.05 * itemPos.width + 0.05 * itemPos.width;

    const yPer =
      (e.nativeEvent.offsetY - itemPos.height / 2) / (itemPos.height / 2);
    const curY =
      itemPos.top + yPer * 0.05 * itemPos.height + 0.05 * itemPos.height;

    setMouseActivePos({ x: curX, y: curY });

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
