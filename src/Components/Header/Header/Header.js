import React from 'react';
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
const Header = ({handleToggleSidebar}) => {
    return (
        <div className="header">
            <FaBars
                className="header-menu" size={26}
                onClick={()=> handleToggleSidebar()}
            />
            <div className="header-logoBox">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" className="header-logo" />
                <h4>YouTube</h4>
            </div>
            <form >
                <input type="text" placeholder="search" />
                <button type="submit" className="">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header-icons">
                <MdNotifications szie={28} />
                <MdApps size={28} />
                <img src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" alt="" />
            </div>
        </div>

    );
};

export default Header;