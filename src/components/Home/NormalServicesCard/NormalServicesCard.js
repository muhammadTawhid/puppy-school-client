import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './NormalServiceCard.css'

const NormalServicesCard = (props) => {

    const { name, cost, days, detail } = props.normalServicesData;

    return (
        <div className="col-md-3 d-flex justify-content-center my-3">
            <div className="info-container info-red">
            <div className="">
            <h5 class="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Cost{cost} </h6>
                    <h6 class="card-subtitle mb-2 text-muted">{days} Days </h6>
                    <FontAwesomeIcon className="info-icon mb-4" icon={faHome}></FontAwesomeIcon>
                </div>
                
                <div >
                <div class="card-body">
                    <p class="card-text">{detail}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NormalServicesCard;






{/* <div className="col-md-3 my-5 mr-3">
            <div class="card shadow " style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Cost{cost} </h6>
                    <h6 class="card-subtitle mb-2 text-muted">{days} Days </h6>
                    <p class="card-text">{detail}</p>
                </div>
            </div>
        </div> */}