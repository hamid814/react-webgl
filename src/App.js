import React, { useRef } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {
  TransitionGroup,
  Transition,
  CSSTransition,
} from 'react-transition-group';
import Navbar from './components/navbar/Navbar';
import './App.css';

import Home from './routes/home/Home';
import { default as R } from './routes/route/Route';

import { enter, exit, animationDuration } from './routes/animations';

const App = () => {
  // const ref0 = useRef();
  const ref = React.createRef();

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Route
          render={({ location }) => {
            const { key } = location;

            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={enter}
                  onExit={exit}
                  timeout={{
                    enter: animationDuration,
                    exit: animationDuration,
                  }}
                >
                  <Switch ref={ref}>
                    <Route exact path="/" component={Home} />
                    <Route path="/route" component={R} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            );
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
