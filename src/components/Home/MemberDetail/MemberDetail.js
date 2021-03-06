import React from 'react';

import memberCat from '../../../images/memberCat.png'
import memberDog from '../../../images/memberDog.png'
import MemberWork from '../MemberWork/MemberWork';

const MemberDetail = () => {
    return (
        <div>
            <section className="row d-flex align-items-center my-5">
            <div className="col-md-6">
                <img className="img-fluid" src={memberCat} alt="" />
            </div>
            <div className="col-md-4 offset-md-1 mr-5">
                <h1 className="text-danger ">Marianne</h1>
                <h1 className="">Lawrence</h1>
                <small className="text-danger">Services</small>
                <MemberWork></MemberWork>
                <button className="btn btn-danger">Let's Train</button>
            </div>
        </section>
            <section  className="my-5 row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 mr-5 my-5">
                <h1 className="text-danger ">Robert  </h1>
                <h1 className="">Sallivan</h1>
                <small className="text-danger">Services</small>
                <MemberWork ></MemberWork>
                <button className="btn btn-danger">Let's Train</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={memberDog} alt="" />
            </div>
        </section>
        </div>
    );
};

export default MemberDetail;