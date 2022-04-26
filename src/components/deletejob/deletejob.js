import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../firebase";
import { useUserAuthrec } from "../../contextrec/UserAuthContextrec";
import Headerrec from "../header/headerrec";



function Deletejob(props) {
    const { user } = useUserAuthrec();
    const navigate = useNavigate();


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

  const DeleteJob = (id) => {
        firestore
        .collection("jobs")
        .doc(id)
        .delete();
        window.location.reload(false);
    }

    return (
        <>
        <Headerrec/>
            <section>
                <div className="head5">Your Jobs</div>
            </section>
            <div className="row">
            {
                jobs.filter(e => e.email === user.email).map((job, index) => 
                <div className="box2" key={index+1}>
                <div className="subtitle1">{ job.title }</div>
                <div className="subtitle2">{ job.company }</div>
                <div className="subtitle3">{ job.location }</div>
                <div className="tiny">{ job.jobtype }, Posted { parseInt(job.postedOn).toString() } days ago</div>
                <button className="btn5" onClick={()=>{DeleteJob(job.id)}}>Delete Job</button>
              </div>
              )
            }
        </div>
        </>
    );
}

export default Deletejob;