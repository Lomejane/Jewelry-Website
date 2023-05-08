import React, { useEffect, useState } from "react";
import { auth } from "../config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Nav from "react-bootstrap/Nav";


const AuthNav = () => {
  const [authenticated, setauthenticated] = useState("");

  useEffect(() => {
    const listenauth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setauthenticated(user);
      } else {
        setauthenticated(null);
      }
    });
    return () => {
      listenauth();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Are you sure you want to signout?");
      })
      .catch((error) => console.log("error"));
  };

  return (
    <>
      {authenticated === null ? (
        <>
          <Nav.Link href="/signUp">SignUp</Nav.Link>

          {/* <NavDropdown.Item href="/login">Login</NavDropdown.Item> */}
        </>

      ) : (

        <Nav.Link href="/login" onClick={userSignOut}>
          SignOut
        </Nav.Link>



      )}
    </>
  );
};
export default AuthNav;
