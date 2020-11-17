import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA2wfGRBHrSlT8hmgyR0P0WLIz7lOkBaqg",
    authDomain: "instagram-clone-f1e74.firebaseapp.com",
    databaseURL: "https://instagram-clone-f1e74.firebaseio.com",
    projectId: "instagram-clone-f1e74",
    storageBucket: "instagram-clone-f1e74.appspot.com",
    messagingSenderId: "391539928937",
    appId: "1:391539928937:web:a77e4d4818fbe546f4d7f8",
    measurementId: "G-B3HWL7KLE4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
