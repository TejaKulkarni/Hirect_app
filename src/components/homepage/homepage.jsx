import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import './homepage.css';

import titleImg from '../../assets/homepage.png';
import companies from '../../assets/companies.png';
import dj from '../../assets/DJ.png';
import bi from '../../assets/BI.png';
import yf from '../../assets/YF.png';

class Homepage extends Component { 
    render() { 
        return (
            <div className="containers">
                <div className="container1">
                    <h1><span>1st Hiring App</span> for</h1>
                    <h1>Founders</h1>
                    <p>Fill Jobs in Hours, Not Weeks.</p>
                    <div className="p">Chat-based hiring App, get replies in as fast as <span className="bold">15 seconds.</span></div>
                    <div className="p">AI accurately matches you to <span className="bold">100K+</span> active candidates.</div>
                    <button>Start Hiring</button>
                    <FontAwesomeIcon id="icon" icon={faCirclePlay} />
                    <img src={titleImg} alt='title' className='titleimg'/>
                </div>
                <div className="container2">
                    <h1>TRUSTED BY 10,000+ STARTUPS</h1>
                    <img src={companies} alt='companies' className='compimg'/>
                    <h2>Meet Your Growth Needs</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" id="one">
                                <h3>Instant Chat and Feedback</h3>
                                <p>One-click to chat directly with candidates and get feedback in just 15 seconds. No more painful e-mails and the hustle of finding the right candidates.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" id="two">
                                <h3>Curated Candidates Recommendation</h3>
                                <p>Our cutting-edge AI algorithm will match you to 100K+ active candidates based on the job description and criteria you filled.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card" id="three">
                                <h3>Instant Chat and Feedback</h3>
                                <p>One-click to chat directly with candidates and get feedback in just 15 seconds. No more painful e-mails and the hustle of finding the right candidates.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" id="four">
                                <h3>Curated Candidates Recommendation</h3>
                                <p>Our cutting-edge AI algorithm will match you to 100K+ active candidates based on the job description and criteria you filled.</p>
                            </div>
                        </div>
                    </div>
                    <h2>Featured by</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="cards">
                                <p>"With Hirect, recruiters and job seekers can chat directly, exchange information, and complete interviews in seconds, all from their mobile devices."</p>
                                <img src={dj} alt='Digital-Journal' className='dig'/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cards">
                                <p>"Hirect is the first instant chat-based mobile hiring app for startup CEOs, recruiters, and job seekers. Hirect is a one-stop cure to the headaches of the traditional hiring and job hunting processes. No more endless emails, applications, and waiting."</p>
                                <img src={bi} alt='Business-Insider' className='dig'/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="cards">
                                <p>"While the traditional hiring process takes over three weeks to complete, Hirect's new approach to mobile hiring takes, on average, just three to four days for successful hires."</p>
                                <img src={yf} alt='Yahoo-Finance' className='dig'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Homepage;


