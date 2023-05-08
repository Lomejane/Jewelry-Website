import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/AuthContexts";
import GoogleButton from "react-google-button";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Fragment>
      <div className="p-4 box">
        <h3 className="mb-3">Create an Account</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-comtrol"
            />
          </Form.Group>
        </Form>
        <Button
          onClick={handleSubmit}
          variant="primary"
          type="submit"
          className="btn btn-dark form-control"
        >
          Sign Up
        </Button>
        <hr />
        <div>
          <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
        </div>
        <div>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
