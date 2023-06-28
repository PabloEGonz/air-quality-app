import React from 'react';
import { useSelector } from 'react-redux';
import CardDetails from '../components/cardDetls';

const Details = () => {
  const { airdata } = useSelector((state) => state.airqa);

  return (
    <ul className="card-container-details">
      {airdata.map((ele) => (
        <CardDetails key={ele.lon} data={ele} />
      ))}
    </ul>
  );
};

export default Details;
