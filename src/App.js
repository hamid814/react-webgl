import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Mouse from './components/mouse/Mouse';
import Canvas from './components/canvas/Canvas';

import Routes from './routes/Routes';

import './App.css';

import useStore from './store/store';

const App = () => {
  const setMousePos = useStore((state) => state.setMousePos);

  const documentMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={documentMouseMove}>
      <BrowserRouter>
        <Canvas />
        <Navbar />
        <div className="container">
          <Mouse />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
};

// test git

export default App;
