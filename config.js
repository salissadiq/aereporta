import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXTIIHw4zh4cjl1GVPivg2puLICGTofsM",
    authDomain: "ireporta-45136.firebaseapp.com",
    projectId: "ireporta-45136",
    storageBucket: "ireporta-45136.appspot.com",
    messagingSenderId: "1097145141304",
    appId: "1:1097145141304:web:912c9fc76290e330ed7ecd",
    measurementId: "G-5N7YYZYQS7"
}

firebase.initializeApp(firebaseConfig)

export { firebase }