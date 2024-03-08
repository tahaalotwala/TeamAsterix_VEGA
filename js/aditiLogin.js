import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    signInWithEmailAndPassword,
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

const registerWithEmail = async (email, pass) => {
    if(email && password)
    {
        try {
            await createUserWithEmailAndPassword(auth, email, pass);
            window.location.href = "aditiUserinfo.html";
        } catch (err) {
            console.log(err);
        }
    }
};

document.getElementById("registerWithGoogle").onclick = async function (e) {
    e.preventDefault();
    await signInWithPopup(auth, googleProvider);
    window.location.href = "aditiUserinfo.html";
};

document.getElementById("registerBtn").onclick = async function (e) {
    e.preventDefault();
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPassword").value;
    if(email && password)
    {
        await registerWithEmail(email, pass);
        window.location.href = "aditiUserinfo.html";
    }
};

document.getElementById("loginBtn").onclick = async function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    if(email && password)
    {
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = "dashboard.html";
        } catch (error) {
            alert(error);
        }
    }
};

document.getElementById("googleLoginBtn").onclick = async function (e) {
    e.preventDefault();
    await signInWithPopup(auth, googleProvider);
    window.location.href = "dashboard.html";
};

// document.getElementById("googleSignIn").onclick = function () {
//     signInWithGoogle();
//     localStorage.setItem("city", "Mumbai");
// };

// document.getElementById("testing").onclick = function () {
//     console.log(auth.currentUser.displayName);
// };
