import React from 'react';
import img from '../../../images/teamMember1.png'

const Member = ({member}) => {
    return (
<div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={member.img} alt=""/>
            <h4>{member.name}</h4>
            <p className="text-secondary">{member.position}</p>
            <button className="btn btn-danger">View Profile</button>
        </div>
    );
};

export default Member;