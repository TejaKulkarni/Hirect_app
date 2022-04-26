import React, { useState, useEffect } from 'react';
import { firestore, app } from "../../firebase";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './addrec.css';
import { Headerrec } from '..';

const AddJob = () => {
  const [form, setValues] = useState({
    company: "",
    companydesc: "",
    title: "",
    email: "",
    jobtype: "",
    description: "",
    postedOn: "",
    location: ""

  });

  const postJob = async(form) => {
    const today = new Date();
    await firestore.collection("jobs").add({
      ...form,
      postedOn: today,
      
    });
  };

  const handleSubmit = async () => {
    await postJob(form);
  };

  const handleChange = (e) => {
    e.persist();
    setValues((oldstate) => ({
      ...oldstate,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
    <Headerrec/>
    <h1><center>Add Job Details</center></h1>
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group">
          <br/>
          <div className="form-group">
            <label >Job Title</label>
            <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange}/>
          </div><br/>
          <div className="form-group">
            <label>Job Type</label>
            <input type="text" className="form-control" name="jobtype" value={form.jobtype} onChange={handleChange}/>
          </div><br/>
          <div className="form-group">
            <label>Location:</label>
            <input type="text" className="form-control" name="location" value={form.location} onChange={handleChange}/>
          </div>
          <br/>
          <div className="form-group">
            <label>Description</label>
            <textarea type="text" className="form-control" name="description" value={form.description} onChange={handleChange}/>
          </div>
          <br/>
            <label >Company</label>
            <input type="text" className="form-control" name="company" value={form.company} onChange={handleChange}/>
          </div>
          <br/>
          <div className="form-group">
            <label >Company Description</label>
            <textarea type="text" className="form-control" name="companydesc" value={form.companydesc} onChange={handleChange}/>
          </div><br/>
          
          <div className="form-group">
            <label >Email</label>
            <input type="text" className="form-control" name="email" value={form.email} onChange={handleChange}/>
          </div><br/>
          
          <div className="btn-job"><Link to = '/homerec'>
            <Button variant="primary" onClick={handleSubmit}>
              Add
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddJob;