import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <BsFillArrowLeftSquareFill className="return" onClick={() => navigate(-1)} />
        <Link className="brand" to="/">Air Quality App</Link>
      </nav>
      <div>
        <Filtered />
      </div>
    </>
  );
};

export default Home;
