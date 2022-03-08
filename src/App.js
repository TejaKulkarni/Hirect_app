import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./logincomponents/Home";
import Login from "./logincomponents/Login";
import Signup from "./logincomponents/Signup";
import ProtectedRoute from "./logincomponents/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import React from "react";

function App() {
  return (
    <Container style={{ width: "480px" }}>
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
        </Col>
      </Row>
    </Container>
  );
}

export default App;
