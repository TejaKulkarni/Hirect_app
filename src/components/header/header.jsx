import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css';
import { NavDropdown } from 'react-bootstrap';

import logo from '../../assets/hirect-logo.png';

const Header = () => { 
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
    

    return (
        <>
            <div className='navbar'>
                <div className='navbar-container container'>
                    <Link to='/' className='navbar-brand' onClick={closeMobileMenu}>
                        <img src={logo} alt="logo" className='logo'/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/jobseeker' className='nav-links' onClick={closeMobileMenu}>Job Seekers</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/download' className='nav-links' onClick={closeMobileMenu}>Download</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className='drop'>
                        <NavDropdown title="Blog">
                            <NavDropdown.Item><Link to='/blogrec' className='nav-links' onClick={closeMobileMenu}>Recruiters</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/blogjob' className='nav-links' onClick={closeMobileMenu}>Job Seekers</Link></NavDropdown.Item>
                        </NavDropdown> 
                    </div>
            </div>
        </>
    );
}
 
export default Header;