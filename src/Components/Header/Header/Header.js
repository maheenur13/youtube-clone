import React,{useContext} from 'react';
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
const Header = ({ handleToggleSidebar }) => {
    return (
        <div className="header">
            <FaBars
                className="header-menu" size={26}
                onClick={() => handleToggleSidebar()}
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
                <div>
                    <img src={sessionStorage.getItem('photo')} alt="" />
                </div>
            </div>
        </div>

    );
};

export default Header;