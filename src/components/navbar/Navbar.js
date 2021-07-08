import { Link } from 'react-router-dom';

import './nav.css';

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">home</Link>
      <Link to="/works">works</Link>
    </div>
  );
};

export default Navbar;
