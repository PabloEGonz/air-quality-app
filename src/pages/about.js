import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
        <h3 className="navbar-brand">Air Quality App</h3>
      </div>
    </nav>
    <h1 className="under-dev">Coming soon</h1>
  </>
);

export default About;
