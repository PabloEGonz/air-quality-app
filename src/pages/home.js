import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/airqaSlice';
import Container from '../components/cardContainer';

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
      <Container />
    </div>
  );
};

export default Home;
