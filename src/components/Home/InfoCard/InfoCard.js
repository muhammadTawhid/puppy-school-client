import React from 'react';
import './InfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ service }) => {
    console.log(service)
    return (
        <div className="col-md-4 info-card text-white d-flex justify-content-center">
            <div className={`info-container info-${service.background}`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon mb-4" icon={service.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <small>{service.details}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;


