import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyARVPJrbdiDK-6mENBv0KauJjkkLnFcmJc",
  authDomain: "l-resume-d95e0.firebaseapp.com",
  databaseURL: "https://l-resume-d95e0.firebaseio.com",
  projectId: "l-resume-d95e0",
  storageBucket: "l-resume-d95e0.appspot.com",
  messagingSenderId: "869380356572"
}

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;