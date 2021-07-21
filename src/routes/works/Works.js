import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from './../Routes';
import { debounce } from 'lodash';

import { ReactComponent as WorksSVG } from '../../assets/svg/Works.svg';

import './works.scss';

const Works = () => {
  const history = useHistory();

  useEffect(() => {
    window.document.addEventListener('wheel', scrollDebounce);
    return () => window.document.removeEventListener('wheel', scrollDebounce);
    // eslint-disable-next-line
  }, []);

  const scrollHander = (e) => {
    if (e.wheelDelta > 0) {
      // navigate to top // go to home
      history.push(routes.home.path);
    }
  };

  const scrollDebounce = debounce(scrollHander, 100);

  return (
    <div className="page" id="works">
      <div className="hero-container">
        <WorksSVG />
      </div>
    </div>
  );
};

export default Works;
