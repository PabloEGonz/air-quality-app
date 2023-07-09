import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Filtered from '../components/filtered';
import { getData } from '../redux/airqaSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state.airqa);
  useEffect(() => {
    dispatch(getData(cities));
  }, [dispatch, cities]);
  return (
    <>
      <nav className="navbar">
        <BsFillArrowLeftSquareFill className="option" onClick={() => navigate(-1)} />
        <h3 className="brand">Air Quality App</h3>
      </nav>
      <div>
        <Filtered />
      </div>
    </>
  );
};

export default Home;
