import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
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
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
          <h3 className="navbar-brand">Air Quality App</h3>
        </div>
      </nav>
      <div>
        <Filtered />
        <Container />
      </div>
    </>
  );
};

export default Home;
