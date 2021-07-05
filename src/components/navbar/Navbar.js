import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/route">route</Link>
    </div>
  );
};

export default Navbar;
