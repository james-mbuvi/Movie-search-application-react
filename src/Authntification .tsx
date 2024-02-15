import React, {useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap-grid.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebase";


function Authentication() {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // // The signed-in user info.
            const user = result.user;

            console.log("user >>>", user);
            setUser(user)
         
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            
        });
    }

    useEffect(() => {
    

    }, []); 

    return (
    <div className="card text-center">
  <div className="card-header">
    Sign Up
  </div>
  <div className="card-body">
    <h5 className="card-title">Sign Up</h5>
    <p className="card-text">Sign up with Google</p>
    <button onClick={signIn} type="button" className="btn btn-outline-success">Google</button>

    {
        user && <div>

            <h6>{user.displayName}</h6>
            <img src={user.photoURL} alt="user" />
            <h5>hello {user.displayName} welcome</h5>
        </div>
    }

  </div>
  <div className="card-footer text-body-secondary">
   
  </div>
</div>
    );
}

export default Authentication;








