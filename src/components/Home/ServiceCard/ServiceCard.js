import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceCard.css'
import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="col-md-3">
            <div className={`info-container info-${service.background}`}>
                <div className="">
                    <h6>{service.name}</h6>
                    <h1>{service.quantity}</h1>
                    <FontAwesomeIcon className="info-icon mb-4" icon={service.icon}></FontAwesomeIcon>
                </div>
                <div >
                    <li>{service.services}</li>
                    <li>{service.services1}</li>
                    <li>{service.services2}</li>
                    <li>{service.services3}</li>
                    <h2 className='d-flex mt-2'><h6>$</h6>{service.cost}</h2>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;