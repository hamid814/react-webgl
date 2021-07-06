import { BrowserRouter, Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Navbar from './components/navbar/Navbar';
import './App.css';

import Home from './routes/home/Home';
import { default as R } from './routes/route/Route';

import Canvas from './components/canvas/Canvas';

import { enter, exit, animationDuration } from './routes/animations';

const routes = [
  { path: '/', Component: Home },
  { path: '/route', Component: R },
];

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Canvas />
      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <Transition
                in={match != null}
                timeout={animationDuration}
                onEnter={(node, appear) => enter(node, path)}
                onExit={(node) => exit(node, path)}
                classNames="page"
                unmountOnExit
              >
                <Component />
              </Transition>
            )}
          </Route>
        ))}
      </div>
    </BrowserRouter>
  );
};

export default App;
