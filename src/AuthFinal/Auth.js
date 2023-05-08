import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { auth, provider, app } from "../config";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import Profile from "./Profile";
function Auth() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //CREATE ACCOUNT
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/")
        alert("successfully created an account");
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        // ..
      });
  };
  //SIGNIN
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/")
        alert("Successfully SignIn");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  //GOOGLE AUTH
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <>
    <div className="p-4 box">
        <h3 className="mb-3">Sign In</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3"  controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
      </Form>
      <div className="d-grid gap-2">
      <Button onClick={signUp} variant="primary">
        Create Account
      </Button>
      </div>
      <div className="d-grid gap-3">
      <Button onClick={signIn} variant="primary" type="submit">
        Sign In
      </Button>
      </div>

      {value ? (
        <Profile />
      ) : (
        <div>
        <GoogleButton onClick={handleClick}>Signin With Google</GoogleButton>
        </div>
      )}
    </div>
    <div className="text-center"><p>Already have an account? </p>
    </div>
    </>
  );
};
export default Auth;
