import './mouse.css';

import useStore from '../../store/store';

const Mouse = () => {
  const mousePos = useStore((state) => state.mousePos);
  const active = useStore((state) => state.mouseActive);

  return (
    <div
      id="mouse"
      style={{ left: mousePos.x, bottom: window.innerHeight - mousePos.y }}
      className={active ? 'active' : ''}
    ></div>
  );
};

export default Mouse;
