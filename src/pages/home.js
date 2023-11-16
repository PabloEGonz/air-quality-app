import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filtered from '../components/filtered';
import { getData } from '../redux/airqaSlice';
import NavBar from '../components/NavBar';

const Home = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.airqa);
  useEffect(() => {
    dispatch(getData(cities));
  }, [dispatch, cities]);
  return (
    <>
      <NavBar />
      <div>
        <Filtered />
      </div>
    </>
  );
};

export default Home;
