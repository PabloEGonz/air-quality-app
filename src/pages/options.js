import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarked } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { RiAccountCircleFill } from 'react-icons/ri';
import Balancer from 'react-wrap-balancer';

const Options = () => (
  <>
    <nav className="navbar">
      <Link to="/"><RiAccountCircleFill className="account" /></Link>
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
        <TbListDetails className="option" />
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
