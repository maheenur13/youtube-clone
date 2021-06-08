import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALTUTy8yzda57TLdtPGoKFOgbDyjiuDTA",
    authDomain: "video-tube-40994.firebaseapp.com",
    projectId: "video-tube-40994",
    storageBucket: "video-tube-40994.appspot.com",
    messagingSenderId: "263693190443",
    appId: "1:263693190443:web:cf8be5bce29eac27dd316e"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase.auth();