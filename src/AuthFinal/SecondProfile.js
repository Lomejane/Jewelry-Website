import React, { Fragment, useState } from "react";
import "../styles/Login.css";
import { getAuth, updatePassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";


const NewProfile = () => {
  const [newPassword, setnewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setnewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update pass
    const auth = getAuth();
    const user = auth.currentUser;

    updatePassword(user, newPassword)
      .then(() => {
        // Updated password
        alert("Password updated successfully");
        setnewPassword('');
        // Clear the password input
        navigate("/profile")
      })
      .catch((error) => {
        // Error Occured
        alert(`Password update failed: ${error.message}`);

      });

  };



  //   try {
  //     await login(email, password);
  //     navigate("/")
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <h3>Update Password</h3>
        <label>New Password</label>
        <input type="password" value="newPassword" onChange={handleChange}></input>
      <Button onClick={handleSubmit} variant="primary" type="submit" className="btn btn-dark form-control">Change Password</Button>
      </Form>


    </Fragment>
  )
}

export default NewProfile;