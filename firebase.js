import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNZRavSRmRLA0uJtJuY3X3dl-V14i0iwI",
    authDomain: "message-3add3.firebaseapp.com",
    projectId: "message-3add3",
    storageBucket: "message-3add3.appspot.com",
    messagingSenderId: "700486482711",
    appId: "1:700486482711:web:0a01ab9e76507364e55552"
  };

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };