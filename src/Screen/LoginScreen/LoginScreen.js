import React, { useEffect } from 'react';
import './_loginscreen.scss';
import { useHistory} from 'react-router-dom';

const LoginScreen = () => {
   
    const handleLogin = () => {

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