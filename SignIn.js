import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDjY-mzojLX1VIOCnLhCoPRFgFw6Y0MoVg",
    authDomain: "vega-1303.firebaseapp.com",
    projectId: "vega-1303",
    storageBucket: "vega-1303.appspot.com",
    messagingSenderId: "755960685663",
    appId: "1:755960685663:web:0f2f24c9765c6c033ea7ea",
    measurementId: "G-2SH2EKSWTL",
};

export const app = initializeApp(firebaseConfig);
export const auth = await getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithEmail = async (email, pass) => {
    try {
        await createUserWithEmailAndPassword(auth, email, pass);
    } catch (err) {
        console.log(err);
    }
};
const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
};

document.getElementById("signInSubmit").onclick = function () {
    console.log("Hello");
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    signInWithEmail(email, pass);
};

document.getElementById("googleSignIn").onclick = function () {
    signInWithGoogle();
};
