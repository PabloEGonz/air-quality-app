import '../styles/add.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { getCityCoord, clearMesg } from '../redux/airqaSlice';
import Locations from '../components/locations';
import Spiner from '../components/spiner';
import NavBar from '../components/NavBar';

const Add = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const { cityOptions, citOptIsLoad, addMessage } = useSelector((state) => state.airqa);
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCityCoord(city));
    setCity('');
  };
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearMesg());
    }, 4000);
  }, [addMessage, dispatch]);
  return (
    <div className="add">
      <NavBar />
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
      {addMessage && (
        <div className="add-mesg">{addMessage}</div>
      )}
      <Link to="/cities" style={{ textDecoration: 'none' }}><button type="button" className="access">See Cities</button></Link>
    </div>
  );
};

export default Add;
