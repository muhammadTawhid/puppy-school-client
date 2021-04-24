import { faHome, faMinusCircle, faMinusSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './NormalServiceCard.css'

const NormalServicesCard = (props) => {

    const { name, cost, days, detail,_id } = props.normalServicesData;
    console.log(_id)

    const deleteEvent = id => {
        console.log(id)
        fetch(`https://fierce-citadel-02505.herokuapp.com/delete/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            })
    }

    return (
        <div className="col-md-4 d-flex justify-content-center my-5">
            <div className=" shadow-sm info-container service-red">
            <div className="">
                    <h6>{name}</h6>
                    <h1>{days} Day</h1>
                    <FontAwesomeIcon className="info-icon " icon={faHome}></FontAwesomeIcon>
                    <h2 className='d-flex text-danger'><h6>$</h6>{cost}</h2>
                </div>
                <div >
                    <p class="card-text ">{detail}</p>
                    <FontAwesomeIcon type="button"  onClick={() => deleteEvent(_id)} className="card-icon " icon={faTrashAlt}></FontAwesomeIcon>
                </div>
                
            </div>
        </div>
    );
};

export default NormalServicesCard;




