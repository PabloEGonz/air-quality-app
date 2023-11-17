import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarked } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';
import { IoMdRemoveCircle } from 'react-icons/io';
import { BsPatchQuestionFill } from 'react-icons/bs';
import Balancer from 'react-wrap-balancer';

const Options = () => (
  <>
    <nav className="navbar">
      <img src={`${process.env.PUBLIC_URL}/airIcon.png`} alt="logo" className="logo" />
      <h3 className="brand">Air Quality App</h3>
    </nav>
    <p className="lead">
      <Balancer>
        This web app provides users with an easy way to monitor
        air quality in different cities.
        Users can view air quality information for each city, add new cities, remove cities,
        and learn about the parameters used to determine air quality levels.
      </Balancer>
    </p>
    <div className="options">
      <Link className="link" to="/cities">
        <FaMapMarked className="option" />
        Cities Air Quality
      </Link>
      <Link className="link" to="/add">
        <MdLibraryAdd className="option" />
        Add a City
      </Link>
      <Link className="link" to="/remove">
        <IoMdRemoveCircle className="option" />
        Remove a City
      </Link>
      <Link className="link" to="/about">
        <BsPatchQuestionFill className="option" />
        About
      </Link>
    </div>
  </>
);

export default Options;
