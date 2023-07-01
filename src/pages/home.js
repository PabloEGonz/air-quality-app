import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsPatchQuestionFill } from 'react-icons/bs';
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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h3 className="navbar-brand">Air Quality App</h3>
          <Link className="return" to="/about"><BsPatchQuestionFill className="option" /></Link>
        </div>
      </nav>
      <div>
        <Filtered />
      </div>
    </>
  );
};

export default Home;
