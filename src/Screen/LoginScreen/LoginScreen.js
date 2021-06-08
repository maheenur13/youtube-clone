import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import "../../firebase";
import "firebase/firestore";
import './_loginscreen.scss';
import { useHistory} from 'react-router-dom';
import { userContext } from '../../App';
const LoginScreen = () => {
    const [loggedInInfo,setLoggedInInfo]=useContext(userContext);
   const history = useHistory();
    const handleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    console.log(token)
    // The signed-in user info.
    var user = result.user;
    const newUserInfo ={};
    newUserInfo.name=user.displayName;
    newUserInfo.email=user.email;
    newUserInfo.photo=user.photoURL;
    setLoggedInInfo(newUserInfo);
    console.log(user);
    history.push('/');
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
    }
    return (
        <div className="login">
            <div className="login-container ">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button onClick={handleLogin}>Login With Google</button>
                <p>This Project is made using <b>YOUTUBE</b>  Data API</p>
            </div>
        </div>
    );
};

export default LoginScreen;