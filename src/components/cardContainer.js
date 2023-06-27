import React from 'react';
import { useSelector } from 'react-redux';
import Card from './card';

const Container = () => {
  const { airdata } = useSelector((state) => state.airqa);

  return (
    <ul>
      {airdata.map((ele) => (
        <Card data={ele} />
      ))}
    </ul>
  );
};

export default Container;
