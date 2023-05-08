import React, { Fragment} from "react";
import bgVid from '../video/bgVideo.mp4'
//
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Banner from "../assets/RingBanner.png";
// import Banner1 from "../assets/2ndlandingpic.jpg";

// Card components
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Featured.css";
import { Pagination } from "swiper";
// Bracelets
import Swiper1 from "../assets/Bracelets/p1.png";
import Swiper2 from "../assets/Bracelets/p2.png";
import Swiper3 from "../assets/Bracelets/p3.png";
import Swiper4 from "../assets/Bracelets/p4.png";
import Swiper5 from "../assets/Bracelets/p5.png";
// Rings
import S1 from "../assets/Rings/r1.png";
import S2 from "../assets/Rings/r2.png";
import S3 from "../assets/Rings/r3.png";
import S4 from "../assets/Rings/r4.png";
import S5 from "../assets/Rings/r7.png";
import S6 from "../assets/Rings/r6.png";
// Necklace
import n1 from "../assets/Necklace/n1 (1).png";
import n2 from "../assets/Necklace/n1 (2).png";
import n3 from "../assets/Necklace/n1 (3).png";
import n4 from "../assets/Necklace/n1 (4).png";
import n5 from "../assets/Necklace/n1 (5).png";
import n6 from "../assets/Necklace/n1 (6).png";
// Gems
import g1 from "../assets/Gems/g (1).png";
import g2 from "../assets/Gems/g (2).png";
import g3 from "../assets/Gems/g (3).png";
import g4 from "../assets/Gems/g (4).png";
import g5 from "../assets/Gems/g (5).png";
import g6 from "../assets/Gems/g (6).png";
// Anklets
import a1 from "../assets/Anklet/A (1).png";
import a2 from "../assets/Anklet/A (2).png";
import a3 from "../assets/Anklet/A (3).png";
import a4 from "../assets/Anklet/A (4).png";
import a5 from "../assets/Anklet/A (5).png";
import a6 from "../assets/Anklet/A (6).png";
// Pearls
import pr1 from "../assets/Pearls/pr (1).png";
import pr2 from "../assets/Pearls/pr (2).jpg";
import pr3 from "../assets/Pearls/pr (3).png";
import pr4 from "../assets/Pearls/pr (4).png";
import pr5 from "../assets/Pearls/pr (5).png";
import pr6 from "../assets/Pearls/pr (6).png";
import pr7 from "../assets/Pearls/pr (7).png";
import pr8 from "../assets/Pearls/pr (8).png";
import pr9 from "../assets/Pearls/pr (9).png";
// Earings
import e1 from "../assets/Earrings/e (1).png";
import e2 from "../assets/Earrings/e (2).png";
import e3 from "../assets/Earrings/e (3).png";
import e5 from "../assets/Earrings/e (5).png";
import e7 from "../assets/Earrings/e (7).png";
import e8 from "../assets/Earrings/e (8).png";
import e9 from "../assets/Earrings/e (9).png";
import e10 from "../assets/Earrings/e (10).png";
import e11 from "../assets/Earrings/e (11).png";
// New

import ne2 from "../assets/New/ne (2).png";
import ne3 from "../assets/New/ne (3).png";
import ne4 from "../assets/New/ne (4).png";
import ne5 from "../assets/New/ne (5).png";


const Featured = () => {
  return (
    <Fragment>
      <div className="main">
        <section className="Cover">
          <Container className="Featured">
            <Row>
              <Col sm={8} className="bg-c">
                {/* <img src={Banner1} alt="ring" /> */}
                <video autoPlay loop muted>
                  <source src={bgVid} type="video/mp4"/>
                </video>
              </Col>
              <Col sm={4} className="bg-s">
               <div className="txt">
                <h3>Company Name</h3>
                <p>UNIQUE DESIGN - Fashion and double linear loops design make you charmer and elegant, beautiful and attractive. Each of our pieces is designed to go with any look or style, from casual to formal.</p>
                <p>Your happiness is our number one priority.</p>
                <a href="/ProductPage">Discover us</a>
               </div>
              </Col>
            </Row>
          </Container>
        </section>
        <br />
        <br />
        <section className="Products">
          <Container className="Products-swiper">
            <Row>
            
              <Col sm={4} className="bsgd">

                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Gold Bracelet</p>
                    </div>
                    <img src={Swiper4} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Black and White Bracelets</p>
                    </div>
                    <img src={Swiper1} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>{}</p>
                    </div>
                    <img src={Swiper3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={Swiper2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={Swiper5} alt="Jewelry" />
                  </SwiperSlide>      
                </Swiper>
              </Col>
              <Col sm={4} className="bsgd">
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Silver Ring</p>
                    </div>
                    <img src={S1} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Engagement Ring</p>
                  </div>
                    <img src={S2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={S3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Text Center</p>
                  </div>
                    <img src={S4} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={S5} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={S6} alt="Jewelry" />
                  </SwiperSlide>
                </Swiper>
              </Col>
              <Col sm={4} className="bsgd">
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                    </div>
                    <img src={n1} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={n2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={n3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Text Center</p>
                  </div>
                    <img src={n4} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={n5} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={n6} alt="Jewelry" />
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>
        <br />
        <br />
        <section className="Products">
          <Container className="Products-swiper">
            <Row>
              <Col sm={4} className="bsgd">
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Center</p>
                    </div>
                    <img src={g1} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={g2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>{}</p>
                    </div>
                    <img src={g3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={g4} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={g5} alt="Jewelry" />
                  </SwiperSlide>  
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={g6} alt="Jewelry" />
                  </SwiperSlide>      
                </Swiper>
              </Col>
              <Col sm={4} className="bsgd">
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                    </div>
                    <img src={a1} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={a2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={a3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Text Center</p>
                  </div>
                    <img src={a4} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={a5} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={a6} alt="Jewelry" />
                  </SwiperSlide>
                </Swiper>
              </Col>
              <Col sm={4} className="bsgd">
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                    </div>
                    <img src={pr1} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={pr2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={pr3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Text Center</p>
                  </div>
                    <img src={pr4} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={pr5} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={pr6} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={pr7} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={pr8} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={pr9} alt="Jewelry" />
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>
        <br />
        <br />
        <section className="New">
        <Container className="Products-swiper">
            <Row>
              <Col sm={4} className="bsgd">
              <div className="N"><h5>New Arrival</h5></div>
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={e1} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>{}</p>
                    </div>
                    <img src={e3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={e2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="text-center">
                    <p>Text Center</p>
                    </div>
                    <img src={e5} alt="Jewelry" />
                  </SwiperSlide>      
                </Swiper>
              </Col>
              <Col sm={4} className="bsgd">
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={e7} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={e8} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Text Center</p>
                  </div>
                    <img src={e9} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={e10} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={e11} alt="Jewelry" />
                  </SwiperSlide>
                </Swiper>
              </Col>
              <Col sm={4} className="bsgd">
                <Swiper
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={ne2} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={ne3} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Text Center</p>
                  </div>
                    <img src={ne4} alt="Jewelry" />
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="text-center">
                    <p>Center</p>
                  </div>
                    <img src={ne5} alt="Jewelry" />
                  </SwiperSlide>
                </Swiper>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Fragment>
  );
};

export default Featured;
