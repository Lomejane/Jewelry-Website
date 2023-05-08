import React from "react";
import "../styles/Profile.css";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/AuthContexts";
import { Image } from "react-bootstrap"
// import Prof from "../assets/logo/logo.png";

const Profile = () => {
  const { user, logOut } = useUserAuth();
  console.log(user);

  // const getUserProfile = (user) =>{
  //   return user.photoURL ? user.photoURL : {Prof};
  // };
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="Profile">
        <div className="file">
          <div className="Top">
            <div className="displayName">
              <p>{user.displayName}</p>
            </div>
            <div className="photoURL">
              <Image src={user.photoURL} roundedCircle={true} className="prof" />
            </div>
          </div>
          <p>{user && user.email}</p>

          <p>{user.phoneNumber}</p>

          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
          <br />
          <br />
          <Button href="/SecondProfile">Update Profile</Button>

        </div>
      </div>
    </>
  );
};
export default Profile;
