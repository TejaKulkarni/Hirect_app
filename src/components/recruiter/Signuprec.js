import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuthrec } from "../../contextrec/UserAuthContextrec";
import "./login_signuprec.css";
import { Footer } from '..';
import { Header } from '..';

const Signuprec = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuthrec();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/homerec");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <Header/>
    <style>{'body { background: linear-gradient(-45deg, #00ffcc, #66ccff, #00ccff, #0066ff); animation: gradient 5s ease infinite; background-size: 400%;}'}</style>
      <div className="p-4 box">
        <div className="login__logo">
          <Link to="/">
            <img
              className="login__logo"
              src="https://ph-files.imgix.net/b585745e-2d1f-474d-98d9-1dcbd3ed9464.png?auto=format"
              alt=""
            />
          </Link>
        </div>
        <h2 className="login-head">Recruiter-Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
          <hr/>
          <div className='line'>Already have an account? <Link to="/loginrec">Log In</Link></div>
        </Form>
      </div>
      <Footer/>
    </>
  );
};

export default Signuprec;
