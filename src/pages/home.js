import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Filtered from '../components/filtered';

const Home = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
        <h3 className="navbar-brand">Air Quality App</h3>
      </div>
    </nav>
    <div>
      <Filtered />
    </div>
  </>
);

export default Home;
