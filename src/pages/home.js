import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/airqaSlice';

const Home = () => {
  const { airdata } = useSelector((state) => state.airqa.airdata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log(airdata);
  return (
    <div>Home</div>
  );
};

export default Home;
