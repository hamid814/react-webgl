import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/layout/navbar/Navbar';
import Mouse from './components/mouse/Mouse';
import Canvas from './components/layout/canvas/Canvas';
import Template from './components/layout/template/Template';
import Layer from './components/layout/layer/Layer';
import MenuButton from './components/layout/menu/button/MenuButton';
import MenuContainer from './components/layout/menu/container/MenuContainer';

import Routes from './routes/Routes';

import './App.css';

import useStore from './store/store';
import { onLoad } from './utils/onload';

const App = () => {
  const setMousePos = useStore((state) => state.setMousePos);

  const documentMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  window.document.addEventListener('DOMContentLoaded', onLoad);

  return (
    <div onMouseMove={documentMouseMove}>
      <BrowserRouter>
        <Canvas />
        <Navbar />
        <Template />
        <Layer />
        <MenuButton />
        <MenuContainer />
        <div className="container">
          <Mouse />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
