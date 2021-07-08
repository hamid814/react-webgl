import { Link } from 'react-router-dom';

import { routes } from '../../routes/Routes';

import useStore from '../../store/store';

import './nav.scss';

const Navbar = () => {
  const setMouseActive = useStore((state) => state.setMouseActive);

  const onMouseEnter = () => {
    setMouseActive(true);
  };

  const onMouseLeave = () => {
    setMouseActive(false);
  };

  return (
    <div id="navbar">
      {routes.map(({ path, name }) => (
        <Link
          key={name}
          to={path}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
