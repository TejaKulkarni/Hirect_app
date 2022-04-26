import { Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { AddJob, Blogjob, Blogrec, Chats, Companydetails, Contact, Deletejob, EditProfile, EditProfileRec, Jobdetails, Jobpost, Login, Privacy, ShowProfile, ShowProfileRec } from "./components";
import { Signup } from "./components";
import { ProtectedRoute } from "./components";
import { UserAuthContextProvider } from './context/UserAuthContext';
import React from "react";
import { Recruiter } from './components';
import { Jobseeker } from './components';
import { Home } from './components';
import { Loginrec } from "./components";
import { Signuprec } from "./components";
import { ProtectedRouterec } from "./components";
import { UserAuthContextProviderrec } from './contextrec/UserAuthContextrec';
import { Homerec } from './components';
import { Downloadpage } from './components';

function App() {
  return (
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route exact path="/jobpost" element={<ProtectedRoute><Jobpost /></ProtectedRoute>} />
              <Route exact path="/jobdetails" element={<ProtectedRoute><Jobdetails /></ProtectedRoute>} />
              <Route exact path="/chats" element={<ProtectedRoute><Chats /></ProtectedRoute>} />
              <Route exact path="/companydetails" element={<ProtectedRoute><Companydetails /></ProtectedRoute>} />
              <Route exact path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
              <Route exact path="/showprofile" element={<ProtectedRoute><ShowProfile /></ProtectedRoute>} />
              <Route exact path="/" element={<Recruiter/>}/>
              <Route exact path="/jobseeker" element={<Jobseeker/>}/>
              <Route exact path="/privacy" element={<Privacy />} />
              <Route exact path="/download" element={<Downloadpage />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/blogjob" element={<Blogjob/>} />
              <Route exact path="/blogrec" element={<Blogrec/>} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>

          <UserAuthContextProviderrec>
            <Routes>
              <Route
                path="/homerec"
                element={
                  <ProtectedRouterec>
                    <Homerec />
                  </ProtectedRouterec>
                }
              />
              <Route path="/loginrec" element={<Loginrec />} />
              <Route path="/signuprec" element={<Signuprec />} />
              <Route exact path="/editprofilerec" element={<ProtectedRouterec><EditProfileRec /></ProtectedRouterec>} />
              <Route exact path="/showprofilerec" element={<ProtectedRouterec><ShowProfileRec /></ProtectedRouterec>} />
              <Route exact path="/addjobrec" element={<ProtectedRouterec><AddJob /></ProtectedRouterec>} />
              <Route exact path="/deletejobrec" element={<ProtectedRouterec><Deletejob /></ProtectedRouterec>} />
            </Routes>
          </UserAuthContextProviderrec>
        </Col>
      </Row>
  );
}

export default App;