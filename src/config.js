import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAN-9Al9kJ39nvDDv_cKRSNVEINRg7-UZM",
  authDomain: "auth-d4d57.firebaseapp.com",
  projectId: "auth-d4d57",
  storageBucket: "auth-d4d57.appspot.com",
  messagingSenderId: "460489577016",
  appId: "1:460489577016:web:85783a3b1128640ef98ccd"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

export { app, auth };

