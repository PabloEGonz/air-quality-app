import React from 'react';
import { useSelector } from 'react-redux';
import { uuid } from 'uuidv4';
import Card from './card';

const Container = () => {
  const { airdata } = useSelector((state) => state.airqa);

  return (
    <ul className="card-container">
      {airdata.map((ele) => (
        <Card key={uuid()} data={ele} />
      ))}
    </ul>
  );
};

export default Container;
