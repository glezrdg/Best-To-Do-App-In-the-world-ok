import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCQfcREpmjy5pWzJaxE5OZZ2c1HwUfB2EM",
    authDomain: "bombaso-44cd8.firebaseapp.com",
    databaseURL: "https://bombaso-44cd8.firebaseio.com",
    projectId: "bombaso-44cd8",
    storageBucket: "bombaso-44cd8.appspot.com",
    messagingSenderId: "1068682077058",
    appId: "1:1068682077058:web:547ae42fe4f1cc3b7da59b",
    measurementId: "G-KZH1DNBFR5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()

export default db;