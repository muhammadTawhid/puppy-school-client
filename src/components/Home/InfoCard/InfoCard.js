import React from 'react';
import './InfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ business }) => {
    // console.log(business)
    return (
        <div className="col-md-4 info-card text-white d-flex justify-content-center">
            <div className={`info-container info-${business.background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon mb-4" icon={business.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h4>{business.title}</h4>
                    <p>{business.description}</p>
                    <small>{business.details}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;


