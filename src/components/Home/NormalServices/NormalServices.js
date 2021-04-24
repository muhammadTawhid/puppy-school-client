import React, { useEffect, useState } from 'react';
import NormalServicesCard from '../NormalServicesCard/NormalServicesCard';



const NormalServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className="text-center">
            <h3 className="text-danger">Our Basic Services,</h3>
            <small className="text-secondary">Here is our normal services <br/>You can add any kind of services whatever you want</small>
            </div>
            <div className="row justify-content-center shadow">
                {
                    services.map(normal => <NormalServicesCard normalServicesData={normal}></NormalServicesCard>)
                }
            </div>
        </div>
    );
};

export default NormalServices;








// fake data
// const normalServices = [
//     {
//         name: 'PET TRAIN',
//         quantity: '5Day',
//         cost:'50',
//         details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
//     },
//     {
//         name: 'PET TRAIN',
//         quantity: '20Day',
//         cost:'250',
//         details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
//     },
//     {
//         name: 'PET TRAIN',
//         quantity: '30Day',
//         cost:'450',
//         details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
//     },
//     {
//         name: 'PET TRAIN',
//         quantity: '30Day',
//         cost:'450',
//         details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
//     },
//     {
//         name: 'PET TRAIN',
//         quantity: '30Day',
//         cost:'450',
//         details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
//     },

// ]