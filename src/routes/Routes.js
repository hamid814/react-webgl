import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import Home from './home/Home';
import Works from './works/Works';
import Generate from './generate/Generate';

import { enter, exit, animationDuration } from './animations';

const PUBLIC_URL = process.env.PUBLIC_URL;

export const routes = {
  home: { path: PUBLIC_URL + '/', Component: Home, name: 'Home' },
  works: { path: PUBLIC_URL + '/works', Component: Works, name: 'Works' },
  generate: {
    path: PUBLIC_URL + '/generate',
    Component: Generate,
    name: 'Generate',
  },
};

export const routesArray = Object.keys(routes).map((r) => routes[r]);

const Routes = () => {
  return (
    <>
      {routesArray.map(({ path, Component }) => (
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
