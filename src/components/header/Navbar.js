// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbar({ theme, toggleTheme, isAuth }) {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };
    return (
        <header>
            <div className={`sidebar ${isActive ? 'active' : ''}`}>
                    <div className='sidebar_btn'>
                        <CloseIcon onClick={handleToggle} className='menue'/>
                        <NavLink to="/login">Sign in</NavLink>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contactUs">Contact</NavLink>
                    </div>
                </div>
            <nav>
                <div className="left">
                    <div className='navlogo'>
                        <NavLink to="/"><img src={theme === 'light' ? "./strinja_logo_2.png" : "./strinja_logo.png"} alt='' /></NavLink>
                    </div>
                </div>
                <div className="right">
                    <div className='nav_btn'>
                        {isAuth?<NavLink to="/logout">Logout</NavLink>:<NavLink to="/login">Sign in</NavLink>}
                        <NavLink to="/">Home</NavLink>
                        {/* <NavLink to="/categories">Categories</NavLink> */}
                        <NavLink to="/gallery">Gallery</NavLink>
                        <NavLink to="/about">About</NavLink>
                        {isAuth?<NavLink to="/new">Add Product</NavLink>:<NavLink to="/contactUs">Contact</NavLink>}
                    </div>
                    <div className="switch">
                        <DarkModeSwitch
                            style={{  }}
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                            size={40}
                        />

                    </div>
                    <div className='no'>
                    {!isActive && <MenuIcon onClick={handleToggle} className='menue' />}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
