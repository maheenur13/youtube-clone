import React from 'react';
import './_sidebar.scss';
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


const Sidebar = ({toggleSidebar, handleToggleSidebar}) => {



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
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>
          <hr/>
        </nav>
    );
};

export default Sidebar;