import { Link } from 'react-router-dom';

import { routesArray as routes } from '../../../routes/Routes';

import Selectable from '../../selectable/Selectable';

import './nav.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      {routes.map(({ path, name }) => (
        <Selectable key={name}>
          <Link to={path}>{name}</Link>
        </Selectable>
      ))}
    </div>
  );
};

export default Navbar;
