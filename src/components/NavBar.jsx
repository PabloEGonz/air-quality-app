import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <BsFillArrowLeftSquareFill className="return" onClick={() => navigate(-1)} />
      <Link className="brand" to="/">Air Quality App</Link>
    </nav>
  );
};

export default NavBar;
