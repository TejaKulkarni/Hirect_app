import { Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Blogjob, Blogrec, Contact, Login, Privacy } from "./components";
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
            </Routes>
          </UserAuthContextProviderrec>
        </Col>
      </Row>
  );
}

export default App;