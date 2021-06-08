import React, { useContext } from 'react';
import './_sidebar.scss';
import firebase from "firebase/app";
import "../../firebase";
import { 
    MdSubscriptions,
    MdExitToApp,
    MdHistory,
    MdThumbUp,
    MdLibraryBooks,
    MdSentimentDissatisfied,
    MdHome
}
from 'react-icons/md';
import { Link } from "react-router-dom";
import { userContext } from '../../App';

const Sidebar = ({toggleSidebar, handleToggleSidebar}) => {
    const [loggedInInfo,setLoggedInInfo]=useContext(userContext);
const handleLogOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('successful')
      }).catch((error) => {
        // An error happened.
      });
}
    console.log('from side bar ',toggleSidebar)
    return (
        <nav className={toggleSidebar? "sidebar open":"sidebar"} onClick={()=>handleToggleSidebar(false)}>
            <li>
                <MdHome size={23} />
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>
            <hr/>
            <li>
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </li>
            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>
            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>Library</span>
            </li>
            <hr/>

            <li >
               {loggedInInfo.email? <Link onClick={handleLogOut} to='/login'>
                <MdExitToApp size={23} />
                <span>Log Out</span>
                </Link>:
                <Link to='/login'>
                <MdExitToApp size={23} />
                <span>Log In</span>
                </Link>
                }
            </li>
          <hr/>
        </nav>
    );
};

export default Sidebar;