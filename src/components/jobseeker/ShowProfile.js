import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import { Link } from 'react-router-dom';
import { useUserAuth } from "../../context/UserAuthContext";
import './profile.css';
import { Headerjob } from '..';

const ShowProfile = () => {
  // add more variables if you want add more fields
  const [form, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
    headline: "",
    currentposition: "",
    education: "",
    location: ""
  });
  const { user } = useUserAuth();
  const dbRef = ref(getDatabase());
  useEffect(() => {

    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        console.log("Data Found", data);
        // once you add new variable add the same variable here
        setValues({ firstname: data.firstname, lastname: data.lastname, email: data.email, contactnumber: data.contactnumber, headline: data.headline, currentposition: data.currentposition, education: data.education, location: data.location});
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
    <Headerjob/>
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
            <h4>Current Position: {form.currentposition}</h4>
            <p>{form.headline}</p>
            <h5>Education: {form.education}</h5>
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
          <Link to='/editprofile'>Edit Profile</Link>
        </div>
      </div>
    
    </div>
    </>
  );
};

export default ShowProfile;