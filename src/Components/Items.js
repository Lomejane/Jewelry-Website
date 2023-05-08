import React from "react";
import ReactImageMagnify from 'react-image-magnify';
import "../styles/Items.css";
import ProductImage from "../assets/transparent5.png";
import ProductImage2 from "../assets/transparent6.png";
import ProductImage3 from "../assets/transparent7.png";

class Items extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        name: "Unisilver Ring",
        src: [ProductImage, ProductImage2, ProductImage3],
        description: "Oeiginal lorem",
        content: "Buy a gift",
        colors: ["red", "black", "crimson", "pink"],
        count: 1,
        price: 200,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.lenght; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="Items">
        {products.map((item) => (
          <div className="details" key={item._id}>


          {/*  */}
            <div className="Large">
              {/* <img src={item.src[index]} alt="" /> */}
           
          {/*  */}
            <ReactImageMagnify {...{
                smallImage: {
                    alt: '',
                    isFluidWidth: true,
                    src: item.src[index]
                },
                largeImage: {
                    src: ProductImage,
                    width: 1200,
                    height: 800
                }
            }} />
            ...
          </div>
            <div className="box">
              <div className="row">
                <h2>{item.name}</h2>
                <span>₱{item.price}</span>
              </div>
              <div className="colors">
                {item.colors.map((color, index) => (
                  <button style={{ background: color }} key={index}></button>
                ))}
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className="thumb" ref={this.myRef}>
                {item.src.map((img, index) => (
                  <img
                    src={img}
                    alt=""
                    key={index}
                    onClick={() => this.handleTab(index)}
                  />
                ))}
              </div>
              <button className="cart">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Items;
