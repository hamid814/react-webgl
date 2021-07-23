import './template.scss';
import Rotated from './../../rotated/Rotated';

const Template = () => {
  return (
    <div id="template">
      <Rotated>
        <div className="top"></div>
      </Rotated>
      <Rotated>
        <div className="bottom"></div>
      </Rotated>
      <Rotated>
        <div className="right"></div>
      </Rotated>
      <Rotated>
        <div className="left"></div>
      </Rotated>
    </div>
  );
};

export default Template;
