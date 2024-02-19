import React, { useState } from "react";
import { auth } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth/web-extension";

function Authntication({ onAuthenticated }) {
    const [userCredential, setUserCredential] = useState({});
    const [error, setError] = useState('');
    const [loginType, setLoginType] = useState('login');

    function handleCredentials(e) {
        setError('');
        setUserCredential({ ...userCredential, [e.target.name]: e.target.value });
    }

    function handleSignUp(e) {
        e.preventDefault();
        const { email, password } = userCredential;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                onAuthenticated();
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    function handleLogin(e) {
        e.preventDefault();
        const { email, password } = userCredential;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                onAuthenticated();
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    function handlePasswordReset() {
        const email = prompt('Please enter your email');
        sendPasswordResetEmail(auth, email);
        alert('Email sent! Check your inbox to reset your password.');
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="text-center mb-4">To continue, create an account or login to an existing account.</p>

                        <div className="text-center mb-4">
                            <button type="button" className="btn btn-secondary me-2" onClick={() => setLoginType('login')}>Login</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setLoginType('signup')}>Signup</button>
                        </div>

                        <p className="text-start">Email</p>
                        <div className="form-floating mb-3">
                            <input onChange={(e) => handleCredentials(e)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>

                        <p className="text-start">Password</p>
                        <div className="form-floating mb-3">
                            <input onChange={(e) => handleCredentials(e)} type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        {loginType === 'login' ? (
                            <button onClick={(e) => handleLogin(e)} className="btn btn-primary" type="button">Login</button>
                        ) : (
                            <button onClick={(e) => handleSignUp(e)} className="btn btn-primary" type="button">Signup</button>
                        )}

                    </div>
                </div>
            </div>

            {error && 
                <div className="error">
                    {error}
                </div>
            }

            <p onClick={handlePasswordReset}><a className="link-offset-2 link-underline link-underline-opacity-0" href="#">Forgot Password?</a></p>
        </>
    );
}

export default Authntication;
































































































