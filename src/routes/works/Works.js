import { useEffect } from 'react';

import { ReactComponent as WorksSVG } from '../../assets/svg/Works.svg';

import './works.scss';

const Works = () => {
  useEffect(() => {
    window.document.addEventListener('wheel', scrollHander);
    return () => window.document.removeEventListener('wheel', scrollHander);
  }, []);

  const scrollHander = () => {};

  return (
    <div className="page" id="works">
      <div className="hero-container">
        <WorksSVG />
      </div>
    </div>
  );
};

export default Works;
