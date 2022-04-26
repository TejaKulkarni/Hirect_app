import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Button } from "react-bootstrap";
import { Headerjob } from '..';

const EditProfile = () => {
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
  const navigate = useNavigate();

  useEffect(() => {

    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        console.log("Data Found", data);
        setValues({ firstname: data.firstname, lastname: data.lastname, email: data.email, contactnumber: data.contactnumber, headline: data.headline, currentposition: data.currentposition, education: data.education, location: data.location });
        console.log("Set the data");
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  const updateField = e => {
    console.log("updating field")
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleProfile = async () => {
    try {
      const db = getDatabase();
      console.log("updating database")
      set(ref(db, 'users/' + user.uid), {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        contactnumber: form.contactnumber,
        headline: form.headline,
        currentposition: form.currentposition,
        education: form.education,
        location: form.location
      });
      navigate("/showprofile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Headerjob/>
    <h1><center>Edit Profile</center></h1>
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="form-group"><br/>
            <label >First Name:</label>
            <input type="text" className="form-control" name="firstname" value={form.firstname} onChange={updateField} placeholder="First Name" />
          </div><br/>
          <div className="form-group">
            <label >Last Name:</label>
            <input type="text" className="form-control" name="lastname" value={form.lastname} onChange={updateField} placeholder="Last Name" />
          </div><br/>
          <div className="form-group">
            <label >Email:</label>
            <input type="text" className="form-control" name="email" value={form.email} onChange={updateField} placeholder="Email" />
          </div><br/>
          <div className="form-group">
            <label>Contact Number:</label>
            <input type="text" className="form-control" name="contactnumber" value={form.contactnumber} onChange={updateField} placeholder="Contact Number" />
          </div><br/>
          <div className="form-group">
            <label>Headline:</label>
            <input type="text" className="form-control" name="headline" value={form.headline} onChange={updateField} placeholder="Headline" />
          </div><br/>
          <div className="form-group">
            <label>Current Position:</label>
            <input type="text" className="form-control" name="currentposition" value={form.currentposition} onChange={updateField} placeholder="Current Position" />
          </div><br/>
          <div className="form-group">
            <label>Education:</label>
            <input type="text" className="form-control" name="education" value={form.education} onChange={updateField} placeholder="Education" />
          </div><br/>
          <div className="form-group">
            <label>Location:</label>
            <input type="text" className="form-control" name="location" value={form.location} onChange={updateField} placeholder="Location" />
          </div><br/>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={handleProfile}>
              Update Profile
            </Button>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default EditProfile;