import Selectable from './../../../selectable/Selectable';

import Canvas from '../../canvas/Canvas';

import './menu-button.scss';

const MenuButton = () => {
  const clickHandler = () => {
    console.clear();
    console.log(Canvas);
  };

  return (
    <Selectable>
      <div onClick={clickHandler} id="menu-button"></div>
    </Selectable>
  );
};

export default MenuButton;
