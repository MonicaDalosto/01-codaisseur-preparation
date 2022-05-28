import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">Homepage</Link> <Link to="/about">About this website</Link>{' '}
      <Link to="/discover">Discover this website</Link>
    </div>
  );
};
export default NavBar;
