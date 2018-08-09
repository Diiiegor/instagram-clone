import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAOSHTwTYxVpg84oDjwHs8_fUGjJa9LNhk",
    authDomain: "clone-instagram-ebfe1.firebaseapp.com",
    databaseURL: "https://clone-instagram-ebfe1.firebaseio.com",
    projectId: "clone-instagram-ebfe1",
    storageBucket: "clone-instagram-ebfe1.appspot.com",
    messagingSenderId: "243781440950"
};
firebase.initializeApp(config);

export const autenticacion=firebase.auth();