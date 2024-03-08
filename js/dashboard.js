import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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
const auth = await getAuth(app);

const setValues = async () => {
    const auth = await getAuth(app);
    setTimeout(() => {
        let name = auth.currentUser.displayName;
        let userName = name.replaceAll(" ", "_") + "_" + Math.floor(Math.random() * 1000);
        userName = userName.toLowerCase();

        name && (document.getElementById("userKaName").textContent = name);
        name && (document.getElementById("userName").textContent = userName);
    }, 1000);
};

setValues();

