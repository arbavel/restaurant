import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyApFlbTsAYDdJEuUsjhGxDnCQP54kdxAJI",
    authDomain: "restaurants-9f1a3.firebaseapp.com",
    projectId: "restaurants-9f1a3",
    storageBucket: "restaurants-9f1a3.appspot.com",
    messagingSenderId: "593863635099",
    appId: "1:593863635099:web:5c4eeb13694ae80722d63e"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
