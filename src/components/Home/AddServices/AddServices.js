

import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';

const AddServices = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            cost: data.cost,
            days: data.days,
            detail: data.details,

        }
        const url = `https://fierce-citadel-02505.herokuapp.com/addService`;
        console.log(serviceData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server res', res))

    };

    return (
        <section className="contact">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                    <div className="col-md mt-5 ">
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4" action="">
                            <div className="form-group">
                                <input defaultValue="" {...register("name")} type="text" className="form-control" id="exampleInputName" placeholder="service name" />
                            </div>
                            <div className="form-group">
                                <input defaultValue="" {...register("cost")} type="text" className="form-control" id="exampleInputName" placeholder="service cost" />
                            </div>
                            <div className="form-group">
                                <input defaultValue="" {...register("days")} type="text" className="form-control" id="exampleInputName" placeholder="days" />
                            </div>
                            <div className="form-group">
                            </div>
                            <div className="form-group">
                                <input {...register("details")} className="form-control" cols="30" rows="10" placeholder="Details " />
                            </div>

                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-danger">Add Service </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AddServices;