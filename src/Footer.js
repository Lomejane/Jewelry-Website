// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import "./footer.css";
// // import Logo1 from './logo/jewelry.png';

// function Footer() {
//   return (
//     <>
//     <Container className="Footer">
//       <Row className="Row">
//         <Col sm={4}>
          
//           <h5>Our Company</h5>
//           <ul>
//             <li>Company Logo</li>
//             <li>About Us Description</li>
//           </ul>
//         </Col>
//         <Col sm={4}>
//           <h5>Lorem</h5>
//           <ul>
//             <li>Jewelry</li>
//             <li>New</li>
//             <li>For Him</li>
//             <li>For Her</li>
//             <li>Contact Us</li>
//           </ul>
//         </Col>
//         <Col sm={4}>
//           <h5>Connect Us</h5>
//           <ul>
//             <li>Facebook</li>
//             <li>Youtube</li>
//             <li>Instagram</li>
//             <li>Tiktok</li>
//           </ul>
//         </Col>
//       </Row>
//     </Container>
//     <Container>
//       <Row>
//         <Col sm={6}>
//         <ul>
//           <h5>Subscribe to our Daily Newsletter</h5>
//           <input type={"email"} placeholder="Enter Email"></input>
//           <button type="submit" className="submit-btn">Submit</button>
          
//         </ul>
//         </Col>
//       </Row>
//     </Container>
//     </>
//   );
// }

// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod quam id velit ultricies, eget convallis turpis finibus. </p>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone: (123) 000000</li>
              <li>Email: j.jewelry@gmail.com</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Explore Now</h5>
            <ul className="list-unstyled">
              <li><a href="/signUp">Sign Up Now</a></li>
              <li><a href="/">Featured</a></li>
              <li><a href="/productPage">Jewelries</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="center">&copy; {new Date().getFullYear()}J.Jewelry.Ph</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

