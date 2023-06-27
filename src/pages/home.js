import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData } from '../redux/airqaSlice';
import Container from '../components/cardContainer';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <Container />
    </div>
  );
};

export default Home;
