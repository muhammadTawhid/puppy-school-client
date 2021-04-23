import React from 'react';
import NormalServicesCard from '../NormalServicesCard/NormalServicesCard';

const normalServices = [
    {
        name: 'PET TRAIN',
        quantity: '5Day',
        cost:'50',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
    },
    {
        name: 'PET TRAIN',
        quantity: '20Day',
        cost:'250',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
    },
    {
        name: 'PET TRAIN',
        quantity: '30Day',
        cost:'450',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
    },
    {
        name: 'PET TRAIN',
        quantity: '30Day',
        cost:'450',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
    },
    {
        name: 'PET TRAIN',
        quantity: '30Day',
        cost:'450',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
    },

]

const NormalServices = () => {
    return (
        <div>
            <div>
            <h3 className="text-danger">Our Casual Services,</h3>
            <small className="text-secondary">Here is our normal services <br/>You can add any kind of services whatever you want</small>
            </div>
            <div className="row">
                {
                    normalServices.map(normal => <NormalServicesCard normalServicesData={normal}></NormalServicesCard>)
                }
            </div>
        </div>
    );
};

export default NormalServices;