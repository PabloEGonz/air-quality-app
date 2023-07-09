import React from 'react';
import '../styles/add.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Locations from '../components/locations';

const Remove = () => {
  const navigate = useNavigate();
  const { cities } = useSelector((state) => state.airqa);

  return (
    <>
      <nav className="navbar">
        <BsFillArrowLeftSquareFill className="return" onClick={() => navigate(-1)} />
        <h3 className="brand">Air Quality App</h3>
      </nav>
      <div>
        <ul className="card-loc-container">
          {cities.map((e) => (
            <Locations key={uuidV4()} info={e} action="delete" />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Remove;
