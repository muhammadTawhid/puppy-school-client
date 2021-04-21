import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link  to="/">
            <h2 className="fw-bold text-danger">Puppy's School</h2>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link mr-3 " href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-3" href="/about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-3 text-danger" href="/services">Our Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-3" href="/review">Reviews</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5 " href="/contact">Contact Us</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

export default Navbar;