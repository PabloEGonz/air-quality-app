import React from 'react';
import '../styles/add.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Locations from '../components/locations';

const Remove = () => {
  const { cities } = useSelector((state) => state.airqa);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
          <h3 className="navbar-brand">Air Quality App</h3>
        </div>
      </nav>
      <div>
        <h1>Remove Cities</h1>
        <ul>
          {cities.map((e) => (
            <Locations key={uuidV4()} info={e} action="delete" />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Remove;
