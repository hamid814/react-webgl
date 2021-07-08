import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import Home from './home/Home';
import Works from './works/Works';

import { enter, exit, animationDuration } from './animations';

const routes = [
  { path: '/', Component: Home },
  { path: '/works', Component: Works },
];

const Routes = () => {
  return (
    <>
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <Transition
              in={match != null}
              timeout={animationDuration}
              onEnter={(node, appear) => enter(node, path)}
              onExit={(node) => exit(node, path)}
              unmountOnExit
            >
              <div>
                <Component />
              </div>
            </Transition>
          )}
        </Route>
      ))}
    </>
  );
};

export default Routes;
