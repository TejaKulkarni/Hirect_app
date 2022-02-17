import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import './homepage.css';

class Homepage extends Component { 
    render() { 
        return (
        <div className="container">
            <h1><span>1st Hiring App</span> for</h1>
            <h1>Founders</h1>
            <p>Fill Jobs in Hours, Not Weeks.</p>
            <div className="p">Chat-based hiring App, get replies in as fast as <span className="bold">15 seconds.</span></div>
            <div className="p">AI accurately matches you to <span className="bold">100K+</span> active candidates.</div>
            <button>Start Hiring</button>
            <FontAwesomeIcon id="icon" icon={faCirclePlay} />
        </div>
        );
    }
}
 
export default Homepage;


