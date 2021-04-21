import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h4 className="text-danger">Planing A Training?</h4>
                    <h1>Contact With Us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Name"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control"  cols="30" rows="10" placeholder="Message "></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-danger"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;