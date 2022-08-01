import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZDZV3srwsj-LOLGE7tYR3pHQqdYvcwlE",
    authDomain: "eshop-f329e.firebaseapp.com",
    projectId: "eshop-f329e",
    storageBucket: "eshop-f329e.appspot.com",
    messagingSenderId: "337784719805",
    appId: "1:337784719805:web:a57057ffffb8a41a31ead4",
    measurementId: "G-R7N5S0E5HL"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
