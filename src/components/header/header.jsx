import React, { Component } from 'react';
import './header.css';

import logo from '../../assets/hirect-logo.png';

class Header extends Component {
    render() { 
        return (
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="logo" className='logo'/>
                    </a>
                    <button
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbar1" 
                    aria-controls="navbar1" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span
                        class="navbar-toggler-icon d-flex justify-content-start align-items-center">
                        <i class="fas fa-bars"></i>
                    </span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbar1">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                            <a class="nav-link" id="home" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="login" href="#">Sign in</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="login" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" id="login" href="#">Download</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}
 
export default Header;