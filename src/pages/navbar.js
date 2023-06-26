import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Air Quality</a>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-item" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item" to="/details">Details</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Navbar;