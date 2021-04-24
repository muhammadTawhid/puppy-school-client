import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';

const AddReview = () => {

    const { register, handleSubmit } = useForm()
    const [imgURL, setImgURL] = useState(null);

    const onSubmit = data => {
        const imgData = {
            name: data.name,
            place: data.place,
            description: data.description,
            imgURL: imgURL,

        }
        const url = `https://fierce-citadel-02505.herokuapp.com/addReview`;
        console.log(imgData);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(imgData)
        })
        .then(res => console.log('server res',res))
        
    };

    const handleImgUpload = img =>{
        console.log(img.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'be8a4cc0a70c10d0afc35bcd7b9def3d')
        imageData.append('image', img.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImgURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

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
                            <input defaultValue="" {...register("name")} type="text" className="form-control" id="exampleInputName" placeholder="Name" />
                            </div>
                            <div className="form-group">
                            <input defaultValue="" {...register("place")} type="text" className="form-control" id="exampleInputName" placeholder="Place" />
                            </div>
                            <div className="form-group">
                            <input className="form-control" type="file" {...register("exampleRequired")} onChange={handleImgUpload} id="exampleInputFile" />
                                
                            </div>
                            <div className="form-group">
                                <input {...register("description")} className="form-control" cols="30" rows="10" placeholder="Description "/>
                            </div>

                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-danger">Add Review </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AddReview;