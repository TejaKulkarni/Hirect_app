import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./logincomponents/Home";
import Login from "./logincomponents/Login";
import Signup from "./logincomponents/Signup";
import ProtectedRoute from "./logincomponents/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Homerec from "./logincomprec/Homerec";
import Loginrec from "./logincomprec/Loginrec";
import Signuprec from "./logincomprec/Signuprec";
import ProtectedRouterec from "./logincomprec/ProtectedRouterec";
import { UserAuthContextProviderrec } from "./contextrec/UserAuthContextrec";
import React from "react";

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
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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
