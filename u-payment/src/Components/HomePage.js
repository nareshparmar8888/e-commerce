import { React } from "react";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";


export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const getCategory = () => {
    axios
    .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
    .then((response)=>{
      console.log(response);
      setCategory(response.data);
    })
  }

  const getProduct = () => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      });
  };

  return (
    <>
      <Header />
      <div>
        <input
          type="text"
          className="input"
          placeholder="Apple Watch,Samsung S21,Mac book Pro,..."
        />
        <button className="data" onClick={getProduct}>Load Product</button>
        <button
          className="category dropdown-toggle"
          type="button"
          placeholder="Categories"
        onClick={getCategory}
        >
          Categories
        </button>
        </div>
        {category.map((props) => {
          return(
            <>
            <select className="home-category">
            <option>{props.name}</option>
          </select>
            </>
          )
        }) }

      {products.map((value) => {
        return (
          <>
            <div className="float-container">
              <div className="float-child">
                <div className="div-image">
                  <img src={value.avatar} alt="watch" className="image" />
                  <div className="item-name">{value.name}</div>
                  <div className="item-price">{value.price}</div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <span className="add">
        +
      </span>
    </>
  );
};

export default HomePage;
