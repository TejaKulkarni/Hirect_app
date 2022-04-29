import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css';
import { useNavigate } from "react-router-dom";
import { useUserAuthrec } from "../../contextrec/UserAuthContextrec";
import { useDetectOutsideClick } from './useDetectOutsideClick';

import logo from '../../assets/hirect-logo.png';


const Headerrec = () => { 
    const { logOut, user } = useUserAuthrec();
    const navigate = useNavigate();
    const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        const showButton = () => {
            if (window.innerWidth <= 960) {
              setClick(false);
            } else {
              setClick(true);
            }
          };

        showButton();
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton);
    }, []);

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
              }
          };
        
          if (isActive) {
            window.addEventListener('click', pageClickEvent);
          }
        
          return () => {
            window.removeEventListener('click', pageClickEvent);
          }
    }, [isActive]);
    

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-brand' onClick={closeMobileMenu}>
                        <img src={logo} alt="logo" className='logo1'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/homerec' className='nav-links' onClick={closeMobileMenu}>Dashboard</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/deletejobrec' className='nav-links' onClick={closeMobileMenu}>Jobs</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/addjobrec' className='nav-links' onClick={closeMobileMenu}>Post Jobs</Link>
                        </li>
                  
                        <li className='nav-item'>
                            <Link to='/chats' className='nav-links' onClick={closeMobileMenu}>Inbox</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className='drop'>
                    <div className="menu-container">
                        <button onClick={onClick} className="menu-trigger">
                            <span>Profile</span>
                            <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
                        </button>
                        <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                            <ul>
                                <li><Link to='/showprofilerec' className='nav-links' onClick={closeMobileMenu}>View Profile</Link></li>
                                <li onClick={handleLogout} className='nav-links' style={{cursor: 'pointer'}}>Logout</li>
                            </ul>
                        </nav>
                    </div>
                        {/*<NavDropdown title="Profile">
                            <NavDropdown.Item><Link to='/showprofilerec' className='nav-links' onClick={closeMobileMenu}>View Profile</Link></NavDropdown.Item>
                            <NavDropdown.Item className='nav-links' onClick={handleLogout}>Log out</NavDropdown.Item>
    </NavDropdown> */}
                </div>
            </div>
        </>
    );
}
 
export default Headerrec;