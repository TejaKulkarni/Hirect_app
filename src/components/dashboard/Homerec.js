import React, { useState, useEffect } from "react";
import { firestore } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useUserAuthrec } from "../../contextrec/UserAuthContextrec";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Headerrec } from '..';

import './recdash.css';

const Homerec = () => {
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

  const handleProfile = async () => {
    try {
      navigate("/showprofilerec");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [jobs, setjobs] = useState([]);

    const fetchJobs = async () => {
        const req = await firestore
            .collection("jobs")
            .orderBy("postedOn", 'desc')
            .get();
            const a = req.docs.map((item) => ({ ...item.data(), id: item.id}));
            setjobs(a);
    };

    useEffect(() => {
      fetchJobs();
  }, []);

  return (
    <>
    <Headerrec/>
      <div className="section">
        <div className="hero1">Chat Directly with Top-notch Candidates Fill Jobs in Hours</div>
        <div className="card">
          <div className="cardhead">Reply</div>
          <div className="cardpara">Discover perfect candidate for this position</div>
          <Link to='/chats'><BsFillArrowRightCircleFill/></Link>
        </div>
      </div>
      <div className="container">
        <div className="h9">Jobs Posted</div>
        <div className="row">
            {
              jobs.filter(e => e.email === user.email).map((job, index) => 
              <div className="card" key={index+1}>
                <h1>{ job.title }</h1>
                <p>{ job.location }</p>
              </div>
              )
            }
        </div>
        <div className="h10">Post a Job</div>
        <div className="p10">Find, contact, and hire high-quality candidates faster than ever.</div>
        <Link to='/addjobrec'><button className="btn12">Add job</button></Link>
      </div>
    </>
  );
};

export default Homerec;
