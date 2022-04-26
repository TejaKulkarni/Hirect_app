import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firestore } from "../../firebase";
import { useUserAuth } from "../../context/UserAuthContext";
import './jobpost.css';
import { CircularProgress, Box } from "@material-ui/core";
import { Headerjob } from '..';



function Jobpost(props) {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
        await logOut();
        navigate("/");
        } catch (error) {
        console.log(error.message);
        }
    };

    const [loading, setLoading] = useState(true);

    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const filteredData = jobs.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            });
            setFilteredResults(filteredData);
            
        }
        else{
            setFilteredResults(jobs);
        }
    };
    

    const [jobs, setjobs] = useState([]);

    const fetchJobs = async () => {
        const req = await firestore
            .collection("jobs")
            .orderBy("postedOn", 'desc')
            .get();
            const today = new Date();
            const a = req.docs.map((item) => ({ ...item.data(), id: item.id, postedOn: (today - item.data().postedOn.toDate()) / (1000 * 3600 * 24) }));
            setjobs(a);
            setLoading(false);
    };
    

    useEffect(() => {
        fetchJobs();
    }, []);

    const viewJob = (i) => {

        navigate('/jobdetails',{ 
            state:{
                title: i.title,
                company: i.company,
                loc: i.location,
                jobtype: i.jobtype,
                compdesc: i.companydesc,
                desc: i.description,
                email: i.email,
            } });
    }
    

    return (
        <>
        <Headerjob/>
            <section>
                <div className="head5">Open Jobs</div>
            </section>
            <div className="container">
            {
                loading ? <Box display="flex" justifyContent='center' marginTop={20}><CircularProgress /></Box>
                :<div className="tim"><input type="text" placeholder="  Job title, Company, Job type or Location....." onChange={(e) => searchItems(e.target.value)}/></div>
            }
                {
                    loading ? <Box display="flex" justifyContent='center' marginTop={20}><CircularProgress /></Box>  

                    : searchInput.length > 1 ? ( 
                            filteredResults.map((job, index) => 
                                <div className="row">
                                    <div className="box2" key={index+1}>
                                        <div className="subtitle1">{ job.title }</div>
                                        <div className="subtitle2">{ job.company }</div>
                                        <div className="subtitle3">{ job.location }</div>
                                        <div className="tiny">{ job.jobtype }, Posted { parseInt(job.postedOn).toString() } days ago</div>
                                        <button className="btn5" onClick={()=>{viewJob(job)}}>More Details</button>
                                    </div>
                                </div>
                            )
                        ) : (jobs.map((job, index) => 
                                <div className="row">
                                    <div className="box2" key={index+1}>
                                        <div className="subtitle1">{ job.title }</div>
                                        <div className="subtitle2">{ job.company }</div>
                                        <div className="subtitle3">{ job.location }</div>
                                        <div className="tiny">{ job.jobtype }, Posted { parseInt(job.postedOn).toString() } days ago</div>
                                        <button className="btn5" onClick={()=>{viewJob(job)}}>More Details</button>
                                    </div>
                                </div>
                        )) 
                    
                }
            </div>
        </>
    );
}

export default Jobpost;