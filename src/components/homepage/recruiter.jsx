import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './recruiter.css';
import { Footer } from '..';
import Aos from 'aos';
import 'aos/dist/aos.css';

import titleImg from '../../assets/homepageb.png';
import midimg from '../../assets/midimg.png';
import midimg1 from '../../assets/midimg1.png';
import midimg2 from '../../assets/midimg2.png';
import companies from '../../assets/companies.png';

const Recruiter = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className="container">
                <div className="up"></div>
                <div className="down"></div>
                <img src={titleImg} alt='title' className='titleimg'/>
                <div className='h1'>1st Hiring App</div>
                <div className='h2'>for Founders</div>
                <div className='p'>Chat Directly with Top-notch Candidates Fill Jobs in Hours</div>
                <div className='btn'>
                    <Link to='/loginrec'>
                        <button className='hbtn'>Hire in Hours</button></Link></div>
                <div className='middle'>
                    <div className='midhead'>Tailored for Founders</div>
                    <div className='midpara'>Skip the middle man, no more painstaking waiting process, chat directly with AI filtered candidates who are interested in your start-up positions.</div>
                    <img src={midimg} alt='middle' className='midimg'/>
                </div>
                <div className='middle1'>
                    <div className='midhead1'>Hiring Made Simple, Fast, Direct</div>
                    <div className='midpara1'>AI saves the time you need to search for the right candidate. Chat directly with candidates and get feedback in minutes.</div>
                    <img src={midimg1} alt='middle1' className='midimg1'/>
                </div>
                <div className='middle2'>
                    <div className='midhead2'>Discover Quality Candidates for Your Business</div>
                    <div className='midpara2'>100K+ active candidates on Hirect.</div>
                    <img src={midimg2} alt='middle2' className='midimg2'/>
                </div>
                <div className='middle3'>
                    <div className='midhead3'>TRUSTED BY 10,000+ STARTUPS</div>
                    <img src={companies} alt='middle3' className='midimg3'/>
                </div>
                <Footer/>
            </div>
        </> 
    );
}
 
export default Recruiter;


