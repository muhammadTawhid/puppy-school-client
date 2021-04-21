import React from 'react';
import '../Header/Header.css'
import memberDog from '../../../images/memberDog.png'

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 mr-5">
                <h1 className="text-danger ">Play With <br/> Your Puppy</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, repellat voluptatum reiciendis ullam perspiciatis provident!</p>
                <button className="btn btn-danger">Let's Train</button>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={memberDog} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;