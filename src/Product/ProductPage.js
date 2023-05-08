import React, { Fragment, useState } from "react";
import "../styles/ProductPage.css";
import bgVid3 from "../video/Vid4.mp4";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: "0",
    image: "./Cardimages/Necklace/n(5).png",
    title: "Original Diamond Necklace",
    description: "Made with high-quality diamonds.",
    price: "₱3001",
  },
  {
    id: "1",
    image: "./Cardimages/Necklace/n (3).png",
    title: "Original Silver Necklace",
    description: "Philippine Inspired",
    price: "3001",
  },
  {
    id: "2",
    image: "./Cardimages/Necklace/n (2).png",
    title: "Original Diamond Necklace",
    description: "Gold",
    price: "3510",
  },
  {
    id: "3",
    image: "./Cardimages/Necklace/n (1).png",
    title: "Original Diamond Necklace",
    description: "Gold",
    price: "6013",
  },
  {
    id: "4",
    image: "./Cardimages/Earrings/e (2).png",
    title: "Original Diamond Necklace",
    description: "Blue Gem",
    price: "7819",
  },
  {
    id: "5",
    image: "./Cardimages/Earrings/e (3).png",
    title: "Original Diamond Necklace",
    description: "Engagement Ring",
    price: "6013",
  },
  {
    id: "6",
    image: "./Cardimages/Earrings/e (4).png",
    title: "Original Diamond Necklace",
    description: "Silver Bracelet",
    price: "9400",
  },
  {
    id: "7",
    image: "./Cardimages/Bracelet/b (1).png",
    title: "Original Diamond Necklace",
    description: "Unique Silver Bracelet",
    price: "904303",
  },
  {
    id: "8",
    image: "./Cardimages/Bracelet/b (2).png",
    title: "Original Diamond Necklace",
    description: "Lock Inspired Bracelet",
    price: "910360",
  },
  {
    id: "9",
    image: "./Cardimages/Ring/r (2).png",
    title: "Original Diamond Necklace",
    description: "Couple Ring",
    price: "6070",
  },
  {
    id: "10",
    image: "./Cardimages/Ring/r (1).png",
    title: "Original Diamond Necklace",
    description: "Black Gem",
    price: "78589",
  },
  {
    id: "11",
    image: "./Cardimages/Ring/r (3).png",
    title: "Original Diamond Necklace",
    description: "Yellow Gem",
    price: "7989",
  },
  {
    id: "12",
    image: "./Cardimages/Earrings/e (4).png",
    title: "Original Diamond Necklace",
    description: "Blue Gem",
    price: "7089",
  },
  {
    id: "13",
    image: "./Cardimages/Earrings/e (4).png",

    description: "Green Gem",
    price: "7889",
  },
  {
    id: "14",
    image: "./Cardimages/Earrings/e (4).png",
    description: "Red Gem",
    price: "7989",
  },
  {
    id: "15",
    image: "./Cardimages/Earrings/e (4).png",
    description: "Blue Gem",
    price: "8099",
  },
  // Gifts
  {
    id: "16",
    image: "./Cardimages/Bracelet/b (1).png",
    description: "Silver Bracelet",
    price: "9600",
  },
  {
    id: "17",
    image: "./Cardimages/Bracelet/b (2).png",
    description: "Lock Inspired Bracelet",
    price: "9100",
  },
  {
    id: "18",
    image: "./Cardimages/Bracelet/b (1).png",
    description: "Unique Silver Bracelet",
    price: "90803",
  },
  {
    id: "19",
    image: "./Cardimages/Ring/r (1).png",
    description: "Marriage Ring",
    price: "7800",
  },
  {
    id: "20",
    image: "./Cardimages/Ring/r (4).png",
    description: "Couple Ring",
    price: "6000",
  },
  {
    id: "21",
    image: "./Cardimages/Ring/r (3).png",
    description: "Engagement Ring",
    price: "6403",
  },
  {
    id: "22",
    image: "./Cardimages/Ring/r (3).png",
    description: "Birthday Ring",
    price: "6603",
  },
  {
    id: "23",
    image: "./Cardimages/Ring/r (3).png",
    description: "Wedding Ring",
    price: "6403",
  },
  {
    id: "24",
    image: "./Cardimages/Ring/r (3).png",
    description: "Monthsary Ring",
    price: "6603",
  },
];
function ProductPage() {
  // const [cart, setCart] = useState([]);
  
  const [description, setDescription] = useState("");
  // the search result
  const [foundProducts, setFoundProducts] = useState(PRODUCTS);
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = PRODUCTS.filter((products) => {
        return products.description
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundProducts(results);
    } else {
      setFoundProducts(PRODUCTS);
    }
    setDescription(keyword);
  };
  const addToCart = (foundproducts) => {
    console.log(foundproducts)
  // const Cart = () => {
  //   const [cart, setCart] = useState([]);
  //   const addToCart = (products) => {
  //     // Check if an item is exist
  //     const indx = cart.findIndex((item) => item.id === products.id);

  //     if (indx === -1) {
  //       // if an item does not exists, add it with a quantity of 1
  //       setCart([...cart, {...products, quantity: 1}]);
  //     }else{
  //       // If an item is in the cart, update it's quantity by 1
  //       const updateCart = [...cart];
  //       updateCart[indx].quantity += 1;
  //       setCart(updateCart);
  //     }

      
  //   }
  };
  return (
    <Fragment>
      <main>
        <section className="Vd-cover">
          <Container>
            <Row>
              <Col sm={8}>
                <video autoPlay loop muted>
                <source src={bgVid3} type="video/mp4" />
              </video>
              </Col>
              <Col sm={4}>
                <div className="her">
                  <h3>Perfect Gift</h3>
                  <p>
                    Personalized jewelry that makes the perfect gift for family
                    and friends and comes in a cute box for easy storage or
                    gifting.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="CardItems mx-auto">
          <Container className="Cardsss">
            <Row className="gap-4">
              <div className="her">
                <h3>For Your Special Loveone</h3>
                <p>
                  Personalized jewelry that makes the perfect gift for family
                  and friends and comes in a cute box for easy storage or
                  gifting.
                </p>
              </div>
              <br />
              <div className="container">
                <input
                  type="search"
                  value={description}
                  onChange={filter}
                  className="input form-control"
                  placeholder="Search Jewelry"
                />
                <br />
                <div className="products">
                  {foundProducts && foundProducts.length > 0 ? (
                    foundProducts.map(
                      (foundproduct, index) =>
                        index % 4 === 0 && (
                          <div className="row" key={index}>
                            <div className="col-sm-6 col-md-3 col-lg-3 mb-3">
                            
                              <Card>
                                <Card.Img
                                  variant="top"
                                  className="mx-auto"
                                  src={foundproduct.image}
                                />
                                <Card.Body>
                                  <Card.Title>
                                  {foundproduct.title}
                                  </Card.Title>
                                  <Card.Text>
                                    {foundproduct.description}
                                  </Card.Text>
                                  <Card.Text className="text-right">
                                  <span className="price">{foundproduct.price}</span>
                                  </Card.Text>
                                  <Link
                                    to=""
                                    type="submit"
                                    className="btn btn-dark form-control"
                                    onClick={() => addToCart(foundproduct)}
                                  >
                                    Add to Cart
                                  </Link>
                                </Card.Body>
                                <Card.Footer>
                                  <small className="text-muted">
                                    Last updated 2 mins ago
                                  </small>
                                </Card.Footer>
                              </Card>
                              <br />
                            </div>
                            {foundProducts[index + 1] && (
                              <div className="col-sm-6 col-md-3 col-lg-3 mb-3">
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    className="mx-auto"
                                    src={foundProducts[index + 1].image}
                                  />
                                  <Card.Body>
                                   <Card.Title>
                                  {foundproduct.title}
                                  </Card.Title>
                                  <Card.Text>
                                      {foundproduct.description}
                                    </Card.Text>
                                    <Card.Text>
                                      {foundproduct.price}
                                    </Card.Text>
                                    <Link
                                      to=""
                                      type="submit"
                                      className="btn btn-dark border form-control"
                                      onClick={() =>
                                        addToCart(foundProducts[index + 1])
                                      }
                                    >
                                      Add to Cart
                                    </Link>
                                  </Card.Body>
                                  <Card.Footer>
                                    <small className="text-muted">
                                      Last updated 1 mins ago
                                    </small>
                                  </Card.Footer>
                                </Card>
                                <br />
                              </div>
                            )}
                            {foundProducts[index + 2] && (
                              <div className="col-sm-6 col-md-3 col-lg-3 mb-3">
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    className="mx-auto"
                                    src={foundProducts[index + 2].image}
                                  />
                                  <Card.Body>
                                  <Card.Title>
                                  {foundproduct.title}
                                  </Card.Title>
                                    <Card.Text>
                                      {foundproduct.description}
                                    </Card.Text>
                                    <Card.Text>
                                      {foundproduct.price}
                                    </Card.Text>
                                    <Link
                                      to=""
                                      type="submit"
                                      className="btn btn-dark border form-control"
                                      onClick={() =>
                                        addToCart(foundProducts[index + 2])
                                      }
                                    >
                                      Add to Cart
                                    </Link>
                                  </Card.Body>
                                  <Card.Footer>
                                    <small className="text-muted">
                                      Last updated 3 mins ago
                                    </small>
                                  </Card.Footer>
                                </Card>
                              </div>
                            )}
                            {foundProducts[index + 3] && (
                              <div className="col-sm-6 col-md-3 col-lg-3 mb-3">
                                <Card>
                                  <Card.Img
                                    variant="top"
                                    className="mx-auto"
                                    src={foundProducts[index + 3].image}
                                  />
                                  <Card.Body>
                                  <Card.Title>
                                  {foundproduct.title}
                                  </Card.Title>
                                    <Card.Text>
                                      {foundproduct.description}
                                    </Card.Text>
                                    <Card.Text>
                                      {foundproduct.price}
                                    </Card.Text>
                                    <Link
                                      to=""
                                      type="submit"
                                      className="btn btn-dark border form-control"
                                      onClick={() =>
                                        addToCart(foundProducts[index + 3])
                                      }
                                    >
                                      Add to Cart
                                    </Link>
                                  </Card.Body>
                                  <Card.Footer>
                                    <small className="text-muted">
                                      Last updated 3 mins ago
                                    </small>
                                  </Card.Footer>
                                </Card>
                            
                              </div>
                            )}
                          </div>
                        )
                    )
                  ) : (

                      <h1>No results found!</h1>
                  )}
                </div>
                
              </div>
            </Row>
          </Container>
        </section>
      </main>
    </Fragment>
  );
}

export default ProductPage;
