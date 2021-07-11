import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDaFCfWqv5M5tmQJr4ZEr7XeSIdDPkpE94",
  authDomain: "crwn-db-56ae2.firebaseapp.com",
  projectId: "crwn-db-56ae2",
  storageBucket: "crwn-db-56ae2.appspot.com",
  messagingSenderId: "805051766652",
  appId: "1:805051766652:web:4fa96cff52e741c948b6f9",
  measurementId: "G-MWE11VPJKV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
