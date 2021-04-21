import React from 'react';
import memberCat from '../../../images/memberCat.png'

const MemberDetail = () => {
    return (
        <section style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-6">
                <img className="img-fluid" src={memberCat} alt=""/>
            </div>
            <div className="col-md-4 offset-md-1 mr-5">
                <h1 className="text-danger ">Step With <br/>  Your  Puppy</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat voluptatum reiciendis ullam perspiciatis provident!</p>
                <button className="btn btn-danger">Let's Train</button>
            </div>
            
        </section>
    );
};

export default MemberDetail;