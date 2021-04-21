import { firebaseApp } from './firebase'
import firebase from 'firebase'
import 'firebase/firestore'

//const db = firebase.firestore(firebaseApp)

const db = firebaseApp.firestore()




export const isUserLogged = () => {
    let isLogged = false
    //console.log("user: " + user);
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}