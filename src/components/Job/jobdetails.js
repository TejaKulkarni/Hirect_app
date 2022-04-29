import React from "react";
import {useLocation} from 'react-router-dom';
import './jobdetail.css';
import { Link } from 'react-router-dom';
import { Headerjob } from '..';

function Jobdetails() {
    const location = useLocation();
    console.log(location.state.title);
    return (
        <>
        <Headerjob/>
            <div className="container">
                <div className="box7">
                    <div className="title">{location.state.title}</div>
                    <div className="company">{location.state.company}</div>
                    <div className="location">{location.state.loc} | {location.state.jobtype}</div>
                    <br/>
                    <div className="head20">About Company</div>
                    <div className="companydesc">{location.state.compdesc}</div>
                    <br/><div className="head20">Job Description</div>
                    <div className="description">{location.state.desc}</div>
                    <br/><div className="em">Contact E-mail: {location.state.email}</div>
                    <Link to='/chats'><button className="btn6">Chat</button></Link>
                </div>
            </div>
        </>
    )
};

export default Jobdetails;