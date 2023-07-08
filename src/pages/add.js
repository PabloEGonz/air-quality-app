import '../styles/add.css';
import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { getCityCoord } from '../redux/airqaSlice';
import Locations from '../components/locations';
import Spiner from '../components/spiner';

const Add = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const { cityOptions, citOptIsLoad } = useSelector((state) => state.airqa);
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
      <nav className="navbar">
        <Link className="return" to="/"><BsFillArrowLeftSquareFill className="option" /></Link>
        <h3 className="brand">Air Quality App</h3>
      </nav>
      <div>
        <form action="POST" className="d-flex flex-row justify-content-center">
          <input id="search-city" type="text" value={city} onChange={handleChange} placeholder="Type the city name" />
          <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
      </div>
      {citOptIsLoad && (<Spiner />)}
      {
        cityOptions.length > 0 && (
          <div>
            <ul className="card-loc-container">
              {cityOptions.map((e) => (
                <Locations key={uuidV4()} info={e} action="add" />
              ))}
            </ul>
          </div>
        )
      }
    </>
  );
};

export default Add;
