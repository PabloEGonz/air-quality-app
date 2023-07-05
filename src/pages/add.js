import '../styles/add.css';
import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { getCityCoord } from '../redux/airqaSlice';
import Locations from '../components/locations';

const Add = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const { cityOptions } = useSelector((state) => state.airqa);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityCoord(city));
    setCity('');
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
          <input id="search-city" type="text" value={city} onChange={handleChange} placeholder="Type the city name" />
          <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
      </div>
      {
        cityOptions.length > 0 && (
          <div>
            <ul>
              {cityOptions.map((e) => (
                <Locations key={uuidV4()} info={e} />
              ))}
            </ul>
          </div>
        )
      }
    </>
  );
};

export default Add;
