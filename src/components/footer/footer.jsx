import React, { Component } from 'react';
import './footer.css';

import logo from '../../assets/hirect-logo.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import fb from '../../assets/fb.png';
import yt from '../../assets/yt.png';
import insta from '../../assets/insta.png';
import tt from '../../assets/tiktok.png';

class Footer extends Component {
    render() { 
        return (
            <footer>
                <div className="container">
                    <img src={logo} alt="logo"/>
                    <div className='head'>1st Hiring App for Founders</div> 
                    <div className="head2">Fill Jobs in Hours, Not Weeks.</div>
                    <div className="row">
                        <div className="col-md-3" id='first'>
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Blogs</a></li>
                                <li><a href="#">Recruiters</a></li>
                                <li><a href="#">Download</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3" id='second'>
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">support@hirect.us</a></li>
                                <li><a href="#">+1 415-741-0211</a></li>
                                <li><a href="#">Schedule a call</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3" id='third'>
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="twitter"><img src={ twitter }/></div>
                    <div className="linkedin"><img src={ linkedin }/></div>
                    <div className="fb"><img src={ fb }/></div>
                    <div className="yt"><img src={ yt }/></div>
                    <div className="insta"><img src={ insta }/></div>
                    <div className="tt"><img src={ tt }/></div>
                </div>
                <hr></hr>
                <div className="foot-line">©2022 Hirect One, Inc. All rights reserved · Privacy policy</div>
            </footer>
        );
    }
}

export default Footer;