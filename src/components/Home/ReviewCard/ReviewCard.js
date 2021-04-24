import React from 'react';

const ReviewCard = (props) => {
    const {name,place ,description,imgURL} = props.review;
    return (
        <div className="col-md-4 my-3">
            <div className="card shadow">
        <div className="card-body">
            <p className="card-text text-center">{description}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
            <img className="mx-3 img-fluid" src={imgURL} alt="" width="60"/>
            <div>
                <h6 className="text-danger">{name}</h6>
                <p className="m-0">{place}</p>
            </div>
        </div>
   </div>
        </div>
    );
};

export default ReviewCard;