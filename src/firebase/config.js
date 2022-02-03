import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDCxIqbAzCwIwvcuQ1IbzrOIYP6THaxF9A",
    authDomain: "project-management-site-e7a81.firebaseapp.com",
    projectId: "project-management-site-e7a81",
    storageBucket: "project-management-site-e7a81.appspot.com",
    messagingSenderId: "424372659084",
    appId: "1:424372659084:web:0659e04db795a5eb97aca9"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth,projectStorage, timestamp }

