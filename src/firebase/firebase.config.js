// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClY33uWbKFtRLjA-P9VqO9cBYCkg3IJLM",
    authDomain: "ema-john-with-firebase-a-81c6c.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-81c6c",
    storageBucket: "ema-john-with-firebase-a-81c6c.appspot.com",
    messagingSenderId: "584291399427",
    appId: "1:584291399427:web:4f100c1518af0927991b36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;