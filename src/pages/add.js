import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCityCoord } from '../redux/airqaSlice';

const Add = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  // const { cityOptions } = useSelector((state) => state.airqa);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityCoord(city));
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
          <h3 className="navbar-brand">Air Quality App</h3>
        </div>
      </nav>
      <div>
        <form action="POST">
          <h2 className="under-dev">Search for a city name</h2>
          <input id="search-city" type="text" value={city} onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
        <h1 className="under-dev">Coming soon</h1>
      </div>
    </>
  );
};

export default Add;
