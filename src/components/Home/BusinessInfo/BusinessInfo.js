import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const businessData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'dark',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat voluptatum reiciendis ullam perspiciatis provident'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 1003 USA',
        icon: faMapMarker,
        background: 'dark',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat Tempore, repellat Tempore'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'dark',
        details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat voluptatum reiciendis ullam perspiciatis provident!'
    }
]

const BusinessInfo = () => {
    return (
        <section className="row">
            {
                businessData.map(business => <InfoCard business={business}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;