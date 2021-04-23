import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link  to="/">
            <h2 className="fw-bold text-danger"><FontAwesomeIcon icon={faPaw} />Puppy's School</h2>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link className="nav-link mr-3 " to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-3" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-3 text-danger" to="/services">Our Services</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-3" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mr-5 " to="/contact">Contact Us</Link>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;