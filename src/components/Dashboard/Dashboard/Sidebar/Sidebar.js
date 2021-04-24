import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt,  faHome, faUserPlus, faStar,faTeethOpen, faPlusSquare,faMinusSquare } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "40rem",maxWidth:"13rem"}}>
            <ul className="list-unstyled">
            <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addServices" className="text-white">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Services" className="text-white">
                        <FontAwesomeIcon icon={faTeethOpen} /> <span>Services</span>
                    </Link>
                </li>
                
                <div>
                    
                    
                    <li>
                        <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Add Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reviews" className="text-white" >
                            <FontAwesomeIcon icon={faStar}/> <span>Reviews</span>
                        </Link>
                    </li>
                    
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;