import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaMapMarked } from 'react-icons/fa';
import { MdLibraryAdd } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { BsPatchQuestionFill } from 'react-icons/bs';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <h3 className="navbar-brand">Air Quality</h3>
      </div>
    </nav>
    <div>
      <div className="options">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-item" to="/home"><FaMapMarked className="option" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item" to="/details"><TbListDetails className="option" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item" to="/add"><MdLibraryAdd className="option" /></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item" to="/about"><BsPatchQuestionFill className="option" /></Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  </>
);

export default Navbar;
