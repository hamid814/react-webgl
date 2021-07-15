import './mouse.css';

import useStore from '../../store/store';

const Mouse = () => {
  const mousePos = useStore((state) => state.mousePos);
  const active = useStore((state) => state.mouseActive);

  const style = {
    left: mousePos.x,
    bottom: window.innerHeight - mousePos.y,
  };

  return (
    <div id="mouse" style={style} className={active ? 'active' : ''}></div>
  );
};

export default Mouse;
