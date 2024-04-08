import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

function Header(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div style={{ position: 'fixed', top: 0, left:0, width: '100%', zIndex: 1001 }}>
            <div className="header-container" style={{ height: '60px', background: "#333", color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='menu-container' style={{ padding: '10px', margin: '10px' }} onClick={toggleSidebar}>
                    <IoMdMenu style={{height: '50px'}}/>
                </div>

                {sidebarOpen && <Sidebar />}

                <div className='logo-container' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src="./images/blogger.png" height='50px' />
                    <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '30px', wordSpacing: '20px', margin: '30px' }}>
                        Blogger
                    </span>
                </div>
                <div className='search-container' style={{ padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}>
                    <input type='text' placeholder='Search' style={{ height: '30px' }} />
                    <button style={{height: '30px'}}><FaSearch/></button>
                </div>
            </div>
        </div>
    )
}

export default Header;
