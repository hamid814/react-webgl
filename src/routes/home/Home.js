import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from './../Routes';
import { debounce } from 'lodash';

import { ReactComponent as HomeSVG } from '../../assets/svg/Home.svg';

import './home.scss';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    window.document.addEventListener('wheel', scrollDebounce);
    return () => window.document.removeEventListener('wheel', scrollDebounce);
    // eslint-disable-next-line
  }, []);

  const scrollHander = (e) => {
    if (e.wheelDelta < 0) {
      // navigate to bottom // go to works
      history.push(routes.works.path);
    }
  };

  const scrollDebounce = debounce(scrollHander, 100);

  return (
    <div className="page" id="home">
      <div className="hero-container">
        <HomeSVG />
      </div>
    </div>
  );
};

export default Home;
