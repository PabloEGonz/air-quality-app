import { FaMapMarked } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { RiAccountCircleFill } from 'react-icons/ri';

const Options = () => {
  return (
    <>
      <nav className="navbar-index">
        <a to="/"><RiAccountCircleFill className="account" /></a>
        <h3 className="brand">Air Quality App</h3>
      </nav>
      <div className="options">
        <a className="a" to="/home">
          <FaMapMarked className="option" />
          Cities Air Quality
        </a>
        <a className="a" to="/details">
          <TbListDetails className="option" />
          Details
        </a>
        <a className="a" to="/add">
          <MdLibraryAdd className="option" />
          Add a City
        </a>
        <a className="a" to="/about">
          <BsPatchQuestionFill className="option" />
          About
        </a>
      </div>
    </>
  );
};

export default Options;
