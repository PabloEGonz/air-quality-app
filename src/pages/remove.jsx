import React from 'react';
import '../styles/add.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Locations from '../components/locations';

const Remove = () => {
  const navigate = useNavigate();
  const { cities } = useSelector((state) => state.airqa);

  return (
    <div className="remove">
      <nav className="navbar">
        <BsFillArrowLeftSquareFill className="return" onClick={() => navigate(-1)} />
        <Link className="brand" to="/">Air Quality App</Link>
      </nav>
      <div>
        <Link to="/cities" style={{ textDecoration: 'none' }}><button type="button" className="access">See Cities</button></Link>
        <ul className="card-loc-container">
          {cities.map((el) => (
            <Locations key={uuidV4()} info={el} action="delete" />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Remove;
