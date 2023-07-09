import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import CardDetails from '../components/cardDetls';

const Details = () => {
  const navigate = useNavigate();
  const { airdata } = useSelector((state) => state.airqa);
  const { city } = useParams();
  const selected = airdata.filter((ele) => ele.name === city);
  return (
    <>
      <nav className="navbar">
        <BsFillArrowLeftSquareFill className="return" onClick={() => navigate(-1)} />
        <h3 className="brand">Air Quality App</h3>
      </nav>
      <ul className="card-container-details">
        {selected.map((ele) => (
          <CardDetails key={uuidV4()} data={ele} />
        ))}
      </ul>
    </>
  );
};

export default Details;
