import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/hirect-logo.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import fb from '../../assets/fb.png';
import yt from '../../assets/yt.png';
import insta from '../../assets/insta.png';
import tt from '../../assets/tiktok.png';

const Contact = () => {
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
                                <li><a href="https://hirectapp.com/about-us">About Us</a></li>
                                <li><a href="">Blogs</a></li>
                                <li><a href="/loginrec">Recruiters</a></li>
                                <li><a href="/login">Job Seekers</a></li>
                                <li><a href="#">Download</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3" id='second'>
                            <h3>Support</h3>
                            <ul>
                                <li><a href="mailto:support@hirect.us">support@hirect.us</a></li>
                                <li><a href="tel:+1 415-741-0211">+1 415-741-0211</a></li>
                                <li><a href="https://calendly.com/dishamenon/hirect?month=2021-07">Schedule a call</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3" id='third'>
                            <h3>Legal</h3>
                            <ul>
                                <li><Link to='/privacy'>Privacy Policy</Link></li>
                                <li><a href="https://hirectapp.com/terms-conditions">Terms and Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="twitter"><a href='https://twitter.com/HirectApp'><img src={ twitter } alt='twitter'/></a></div>
                    <div className="linkedin"><a href='https://www.linkedin.com/company/hirect-us/'><img src={ linkedin } alt='linkedin'/></a></div>
                    <div className="fb"><a href='https://www.facebook.com/HirectApp'><img src={ fb } alt='facebook'/></a></div>
                    <div className="yt"><a href='https://www.youtube.com/channel/UC98TU-jrNVOJCWC-FhnaPWQ'><img src={ yt } alt='youtube'/></a></div>
                    <div className="insta"><a href='https://www.instagram.com/hirect.us/'><img src={ insta } alt='instagram'/></a></div>
                    <div className="tt"><a href='https://www.tiktok.com/@hirectapp'><img src={ tt } alt='tiktok'/></a></div>
                </div>
            </footer>
        );
}

export default Contact;