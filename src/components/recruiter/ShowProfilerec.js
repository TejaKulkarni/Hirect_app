import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { Link } from 'react-router-dom';
import { useUserAuthrec } from '../../contextrec/UserAuthContextrec';
import './profilerec.css';
import { Headerrec } from '..';


const  ShowProfileRec = () => {
  const [form, setValues] = useState({
    firstname: "",
    lastname: "",
    contactnumber: "",
    email: "",
    position: "",
    company: "",
    overview: "",
    location: "",
    experience: ""
  });
  const { user } = useUserAuthrec();
  const dbRef = ref(getDatabase());
  useEffect(() => {

    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        console.log("Data Found", data);
        setValues({ firstname: data.firstname, lastname: data.lastname, contactnumber: data.contactnumber, email: data.email, position: data.position, company: data.company, overview: data.overview, location: data.location, experience: data.experience });
        console.log("Set the data");
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });


  }, [])


  return (
    <>
    <Headerrec/>
    <div>
    <div className='container'>
    <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img>
              </div>
      </div>
      <div className='column left'>
        <dl><br/>
        <div>
          <h1>{form.firstname} {form.lastname}<br/></h1>
          <h4>Position: {form.position}</h4>
          <h4>Company: {form.company}</h4>
          <p>{form.overview}</p>
          <h4>Experience: {form.experience}</h4>
          <h5>Location: {form.location}</h5>
          <p></p>
        </div>
          <dt>Email ID:</dt>
          <dd>{form.email}</dd><br/>
          <dt>Contact Number:</dt>
          <dd>{form.contactnumber}</dd><br/>
        </dl>
      </div>
      <div className='right'>
        <Link to='/editprofilerec'>Edit Profile</Link>
      </div>
    </div>
  
  </div>
  </>
);
};

export default ShowProfileRec;