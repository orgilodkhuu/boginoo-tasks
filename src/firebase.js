import firebase from 'firebase'
import 'firebase/firestore'
firebase.initializeApp({
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyA7NvKTTUXFP-szrdCnL2jyJKQragmEAo4",
    authDomain: "todo2-af922.firebaseapp.com",
    databaseURL: "https://todo2-af922.firebaseio.com",
    projectId: "todo2-af922",
    storageBucket: "todo2-af922.appspot.com",
    messagingSenderId: "169610213293",
    appId: "1:169610213293:web:a8f920222ce66c2167d324",
    measurementId: "G-K36F6JTVEQ"
});
let db = firebase.firestore()
let storage = firebase.storage()
let auth=firebase.auth()
export {
    firebase, db, storage,auth
}
export const createDoc=(path,data)=>{
    firebase.firestore().doc(path).set({
        createdAt: firebase.firestore.FieldValue.serverTimestamp() || null,
        ...data
    })
}