import React, { useContext, useState } from 'react';
import './Login.css'

import 'firebase/auth'
import firebase from "firebase/app";
import firebaseConfig from './firebase.config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faPaw, } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';



!firebase.apps.length && firebase.initializeApp(firebaseConfig);


const Login = () => {
    const history = useHistory()
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // const [user, setUser] = useState({});
    var provider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const loggedInUser = result.user;
                setLoggedInUser(loggedInUser);
                history.replace(from);
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
                <small >current email : {loggedInUser.email}</small>

            </div>

        </div>

    );
};

export default Login;