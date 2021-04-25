import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCF19Zj_01b9QhudvJOOQna-gyjsXBQmJI",
    authDomain: "react-app-cursos-96724.firebaseapp.com",
    projectId: "react-app-cursos-96724",
    storageBucket: "react-app-cursos-96724.appspot.com",
    messagingSenderId: "418374568470",
    appId: "1:418374568470:web:08bc545572f748efb28337"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}