import React,{useState,useEffect} from 'react'
import "./companydetails.css"
import {firestore} from "../../firebase"
import { Headerjob } from '..';

function Companydetails() {
    const [jobs, setjobs] = useState([]);

    const fetchJobs = async () => {
        const req = await firestore
            .collection("jobs")
            .orderBy("postedOn", 'desc')
            .get();
            const today = new Date();
            const a = req.docs.map((item) => ({ ...item.data(), id: item.id }));
            setjobs(a);
        
    };
    useEffect(() => {
        fetchJobs();
    }, []);
  return (
      <>
      <Headerjob/>
    <div className='h30'><center>Employers</center></div>
    <div className='container'>
        {jobs.map((job, index) => 

                                <div className="row">
                                
                                    <div className="box7" key={index+1}>
                                        <div className="title">{ job.company }</div>
                                        <div className="subtitle3">{ job.location }</div>
                                        <br/>
                                        <div className="head20">Company description </div>
                                        <div className='companydesc'>{job.companydesc}</div>
                                        <br/>
                                    </div>
                                </div>
    )}
    </div>
    </>
    )
}
export default Companydetails;