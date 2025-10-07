// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAI4u8OkViCH4aNIMtxij1sk_0brLUd6Ug",
    authDomain: "prepwise-29f01.firebaseapp.com",
    projectId: "prepwise-29f01",
    storageBucket: "prepwise-29f01.firebasestorage.app",
    messagingSenderId: "68373773807",
    appId: "1:68373773807:web:ac2dddac791115efd50a1a",
    measurementId: "G-MG28FJ9310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);