import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './jobseeker.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Footer } from '..';
import { Header } from '..';

import titleImg from '../../assets/titleimg1.png';
import midimg from '../../assets/mimg.png';
import midimg1 from '../../assets/mimg1.png';
import midimg2 from '../../assets/mimg2.png';
import midimg3 from '../../assets/mimg3.png';
import midimg4 from '../../assets/mimg4.png';
import companies from '../../assets/companies.png';

const Jobseeker = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <Header/>
            <div className="container">
                <div className="up1"></div>
                <div className="down1"></div>
                <img src={titleImg} alt='title' className='titleimg1'/>
                <div className='a'>Chat Directly</div>
                <div className='b'>with Founders</div>
                <div className='c'>Find Your Dream Job in Hours.</div>
                <div className='btn1'>
                    <Link to='/login'>
                        <button className='tbtn'>Start Chatting</button></Link></div>
                <div className='mid'>
                    <div className='midhead' data-aos="fade-up">Find a Job Instantly!</div>
                    <div className='midpara' data-aos="fade-up">Get feedback in minutes.</div>
                    <img src={midimg} alt='middle' className='midimg' data-aos="fade-up"/>
                </div>
                <div className='mid1'>
                    <div className='midhead1' data-aos="fade-up">How to Get Hired in Hours</div>
                    <div className='row' >
                        <div className='col-md-4'>
                            <div className='card' id='m1' data-aos="fade-up">
                                <img src={midimg1} alt='middle1' className='midimg1'/>
                                <div className='para'>AI takes the work out of your job search.</div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card' id='m2' data-aos="fade-up">
                                <img src={midimg2} alt='middle2' className='midimg2'/>
                                <div className='para'>Chat directly with founders.</div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card' id='m3' data-aos="fade-up">
                                <img src={midimg3} alt='middle3' className='midimg3'/>
                                <div className='para'>Get Hired.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mid2'>
                    <div className='midhead2' data-aos="fade-up">No Emailing</div>
                    <div className='midpara2' data-aos="fade-up">Chat, interview, and get hired anytime, anywhere.</div>
                    <img src={midimg4} alt='middle4' className='midimg4' data-aos="fade-up"/>
                </div>
                <div className='mid3'>
                    <div className='midhead3' data-aos="fade-up">TRUSTED BY 10,000+ STARTUPS</div>
                    <img src={companies} alt='middle5' className='midimg5' data-aos="fade-up"/>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default Jobseeker;