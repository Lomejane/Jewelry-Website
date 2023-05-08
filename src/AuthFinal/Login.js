import React, { Fragment, useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/AuthContexts";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/")
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
        <div className="login-containers">
          <h3 className="mb-3">Login</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
                className="form-control"
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
          <Button onClick={handleSubmit} variant="primary" type="submit" className="btn btn-dark form-control">Login</Button>
          <hr />
          <div>
            <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
          </div>
          <div>
            Don't have an account? <Link to="/signUp">SignUp</Link>
          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default Login;