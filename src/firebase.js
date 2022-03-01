// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBNaa27Hc3AfJ8pu9zR6Iw3DiBC8_V8RVY',
    authDomain: 'facebook-clone-9bde5.firebaseapp.com',
    projectId: 'facebook-clone-9bde5',
    storageBucket: 'facebook-clone-9bde5.appspot.com',
    messagingSenderId: '895151180134',
    appId: '1:895151180134:web:a46de4c5b9238259f6e0a7',
    measurementId: 'G-B04YDCGZ4M',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
