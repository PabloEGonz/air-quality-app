import React from 'react';
import { useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CardDetails from '../components/cardDetls';

const Details = () => {
  const { airdata } = useSelector((state) => state.airqa);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
          <h3 className="navbar-brand">Air Quality App</h3>
        </div>
      </nav>
      <ul className="card-container-details">
        {airdata.map((ele) => (
          <CardDetails key={ele.lon} data={ele} />
        ))}
      </ul>
    </>
  );
};

export default Details;
