import React from 'react';

const NormalServicesCard = ({normalServicesData}) => {

//    const [name, quantity, cost, details] = normalServicesData;

    return (
        <div className="col-md-3 mb-3">
            <h3>{normalServicesData.name}</h3>
            <h3>{normalServicesData.quantity}</h3>
            <h3>${normalServicesData.cost}</h3>
            <small>{normalServicesData.details}</small>
        </div>
    );
};

export default NormalServicesCard;