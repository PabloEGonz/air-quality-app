import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/airqaSlice';
import Container from '../components/cardContainer';
import Filtered from '../components/filtered';

const Home = () => {
  const dispatch = useDispatch();
  const { cities, airdata } = useSelector((state) => state.airqa);

  useEffect(() => {
    if (airdata.length === 0) {
      dispatch(getData(cities));
    }
  }, [dispatch, cities]);
  return (
    <div>
      <Filtered />
      <Container />
    </div>
  );
};

export default Home;
