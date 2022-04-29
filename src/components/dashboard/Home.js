import React, { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { firestore } from "../../firebase";
import { Headerjob } from ".."
 
import './jobdash.css';

const Home = () => {
  const [jobs, setjobs] = useState([]);

    const fetchJobs = async () => {
        const req = await firestore
            .collection("jobs")
            .orderBy("postedOn", 'desc')
            .get();
            const today = new Date();
            const a = req.docs.map((item) => ({ ...item.data(), id: item.id, postedOn: (today - item.data().postedOn.toDate()) / (1000 * 3600 * 24) }));
            setjobs(a);
    };

    useEffect(() => {
      fetchJobs();
  }, []);
  
  return (
    <>
    <Headerjob/>
      <div className="high">
          <div className="hero">Steps to success<br/> you can take <br/>today</div>
          <div className="card" id="card">
            <div className="cardhead">Start Chatting</div>
            <div className="cardpara">Discover your dream job and chat with the employers.</div>
            <Link to='/chats'><BsFillArrowRightCircleFill/></Link>
          </div>
      </div>
      <div className="container">
        <div className="subhead">Got Questions? Get Answers.</div>
        <div className="subpara">CEO's and hiring managers for these roles are open to messages from students.</div>
        
        <div className="sub">
          <div className="row">
            {
              jobs.slice(0,3).map((job, index) =>
              <div className="card" key={index+1}>
                <h1>{ job.title }</h1>
                <p>{ job.company }</p>
                <p>{ job.location }</p>
                <Link to='/chats'><button className="btn12">Start Chatting</button></Link>
              </div>
              )}
          </div>
        </div>
        

        <div className="subhead1">Recommended Employers</div>
        <div className="subpara1">These employers could be a good match for your interests. Know more about these companies.</div>
        <div className="sub">
          <div className="row">
            {
              jobs.slice(-3).map((job, index) =>
              <div className="card" key={index+1}>
                <h1>{ job.company }</h1>
                <p>{ job.location }</p>
                <Link to='/companydetails'><button className="btn12">More Employers</button></Link>
              </div>
              )}
          </div>
        </div>
      </div>
    {/*
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
  */}
    </>
  );
};

export default Home;
