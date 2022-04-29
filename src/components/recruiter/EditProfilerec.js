import React, { useState, useEffect } from 'react';
import { getDatabase, ref, child, get, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useUserAuthrec } from '../../contextrec/UserAuthContextrec';
import { Button } from "react-bootstrap";
import { Headerrec } from '..';

const EditProfileRec = () => {
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
  const navigate = useNavigate();

  useEffect(() => {

    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val()
        console.log("Data Found", data);
        setValues({ firstname: data.firstname, lastname: data.lastname, contactnumber: data.contactnumber, email: data.email, position: data.position, company: data.company, overview: data.overview, location: data.location,  experience: data.experience });
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
        contactnumber: form.contactnumber,
        email: form.email,
        position: form.position,
        company: form.company,
        overview: form.overview,
        location: form.location,
        experience: form.experience
      });
      navigate("/showprofilerec");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Headerrec/>
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
            <label>Contact Number:</label>
            <input type="text" className="form-control" name="contactnumber" value={form.contactnumber} onChange={updateField} placeholder="Contact Number" />
          </div><br/>
          <div className="form-group">
            <label >Email:</label>
            <input type="text" className="form-control" name="email" value={form.email} onChange={updateField} placeholder="Email" />
          </div><br/>
          <div className="form-group">
            <label >Position:</label>
            <input type="text" className="form-control" name="position" value={form.position} onChange={updateField} placeholder="Position" />
          </div><br/>
          <div className="form-group">
            <label >Company:</label>
            <input type="text" className="form-control" name="company" value={form.company} onChange={updateField} placeholder="Company" />
          </div><br/>
          <div className="form-group">
            <label >Overview:</label>
            <input type="text" className="form-control" name="overview" value={form.overview} onChange={updateField} placeholder="Overview" />
          </div><br/>
          <div className="form-group">
            <label >Location:</label>
            <input type="text" className="form-control" name="location" value={form.location} onChange={updateField} placeholder="Location" />
          </div><br/>
          <div className="form-group">
            <label>Experience:</label>
            <input type="text" className="form-control" name="experience" value={form.experience} onChange={updateField} placeholder="Experience" />
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

export default EditProfileRec;