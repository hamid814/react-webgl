import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Mouse from './components/mouse/Mouse';
import Canvas from './components/canvas/Canvas';

import './App.css';

import Routes from './routes/Routes';

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const documentMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const onWheel = (e) => {
    // console.log(e.target);
  };

  return (
    <div onMouseMove={documentMouseMove} onWheel={onWheel}>
      <BrowserRouter>
        <Canvas />
        <Navbar />
        <div className="container">
          <Mouse pos={mousePos} />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
