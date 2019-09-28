import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyClBpNNAAeREShbFj_0UUYnEGoGpZw81Uk",
  authDomain: "crwn-clothing-cd888.firebaseapp.com",
  databaseURL: "https://crwn-clothing-cd888.firebaseio.com",
  projectId: "crwn-clothing-cd888",
  storageBucket: "",
  messagingSenderId: "261774092289",
  appId: "1:261774092289:web:6e1d0468fcbfe545cab800",
  measurementId: "G-RPPPYEBL8G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
