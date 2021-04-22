import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faBriefcaseMedical, faBone } from '@fortawesome/free-solid-svg-icons'

const MemberWork = () => {
    return (
        <div >
            <div>
            <h4>Pet Care <FontAwesomeIcon icon={faPaw} /></h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <h4>Training <FontAwesomeIcon icon={faBone} /></h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <h4>FIRST AID <FontAwesomeIcon icon={faBriefcaseMedical} /></h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        </div>
    );
};

export default MemberWork;