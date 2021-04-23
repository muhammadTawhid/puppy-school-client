import React, { useState } from 'react';
import './Login.css'

import 'firebase/auth'
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPaw, } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar';





!firebase.apps.length && firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useState({});
    var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                setUser(user)
            }).catch((error) => {
                console.log(error);
            });

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="shadow text-center div-style ">
                <h2 className="fw-bold text-danger"><FontAwesomeIcon icon={faPaw} /> Puppy's <br /> School</h2>
                <button onClick={handleGoogleSignIn} className="btn-style text-white my-3"> <FontAwesomeIcon icon={faGoogle} /> Login With Google</button>
                <p>Don't have an account?<a href="/">create account</a></p>
                <small >current email : {user.email}</small>

            </div>

        </div>

    );
};

export default Login;