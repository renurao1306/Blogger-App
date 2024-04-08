import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function Sidebar(props) {
  const sidebarStyle = {
    marginTop: '60px',
    width: '250px',
    height: '80%',
    backgroundColor: '#4BC0D9',
    color: '#000',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: 'transform 0.3s ease-out',
    transform: 'translateX(-250px)',
  };

  const openSidebarStyle = {
    transform: 'translateX(0)',
  };

  const menuItemStyle = {
    marginBottom: '10px',
  };

  return (
    <div style={{ ...sidebarStyle, ...openSidebarStyle }}>
      <h2>Hello, User!</h2>
      <ul>
        <li style={menuItemStyle}><Link to="/" style={{color: '#000'}}>Home</Link></li>
        <li style={menuItemStyle}><Link to="/posts" style={{color: '#000'}}>Blog Posts</Link></li>
        <li style={menuItemStyle}><Link to="/contact" style={{color: '#000'}}>Contact</Link></li>
        </ul>
    </div>
  );
}

export default Sidebar;
