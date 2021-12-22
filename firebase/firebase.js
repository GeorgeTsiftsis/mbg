import firebase from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyCbFxoVdXc8_0lgP2nBJPZUNTeilqgUVxE",
  authDomain: "mbgduth-58b1b.firebaseapp.com",
  projectId: "mbgduth-58b1b",
  storageBucket: "mbgduth-58b1b.appspot.com",
  messagingSenderId: "503272333964",
  appId: "1:503272333964:web:b227a2b2621bec813111a9",
  measurementId: "G-Y5XP02H1DN",
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
