import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import ServiceCard from '../ServiceCard/ServiceCard';
import NormalServices from '../NormalServices/NormalServices';


const serviceData = [
    {
        name: 'PET TRAIN',
        quantity: '5Day',
        icon: faHome,
        services: 'Double room ',
        services1:'Socialize',
        services2:'Brush',
        services3:'Pet TV',
        background: 'gray',
        cost:'50'
    },
    {
        name: 'PET TRAIN',
        quantity: '20Day',
        icon: faHome,
        services: 'Single room',
        services1:'Socialize Exercise',
        services2:'Custom Meals',
        services3:'Spa and Grooming',
        background: 'red',
        cost:'250'
    },
    {
        name: 'PET TRAIN',
        quantity: '30Day',
        icon: faHome,
        services: 'Single room',
        services1:'Exercise 2x',
        services2:'Custom Meals',
        services3:'Grooming 2x',
        background: 'gray',
        cost:'450'
    },

]

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 className="text-danger">OUR SERVICES</h5>
                <h2 className="mb-5">Service We Provide</h2>
            </div>
            <div className="row  justify-content-center my-3">
            {
                serviceData.map(service => <ServiceCard service={service}></ServiceCard>)
            }
            </div>
            <NormalServices></NormalServices>
        </section>
    );
};

export default Services;