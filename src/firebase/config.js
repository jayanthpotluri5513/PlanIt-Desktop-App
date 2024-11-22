import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD_ars-IDdXmy5B86HJYINnLaoY28DpnNg",
    authDomain: "planit-11ea5.firebaseapp.com",
    projectId: "planit-11ea5",
    storageBucket: "planit-11ea5.appspot.com",
    messagingSenderId: "115507886799",
    appId: "1:115507886799:web:c15d54abd23a70596b55ba"
    }

// init firebase
firebase.initializeApp(firebaseConfig)

// init services

const projectFirestore= firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage= firebase.storage()
// timestamp

const timestamp = firebase.firestore.Timestamp
export {projectFirestore, projectAuth, projectStorage,timestamp}
