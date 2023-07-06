import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Filtered from '../components/filtered';
import { getData } from '../redux/airqaSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.airqa);
  useEffect(() => {
    dispatch(getData(cities));
  }, [dispatch, cities]);
  return (
    <>
      <nav className="navbar">
        <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
        <h3 className="brand">Air Quality App</h3>
      </nav>
      <div>
        <Filtered />
      </div>
    </>
  );
};

export default Home;
