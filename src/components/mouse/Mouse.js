import './mouse.css';

const Mouse = ({ pos }) => {
  return (
    <div
      id="mouse"
      style={{ left: pos.x, bottom: window.innerHeight - pos.y }}
    ></div>
  );
};

export default Mouse;
