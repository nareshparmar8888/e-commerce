import { React , useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { CreateProduct } from '../Components/CreateProduct';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  // const [description, setDescription] = useState([]);

  // const getDescription = () => {
  //   axios
  //     .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/1")
  //     .then((response) => {
  //       console.log(response);
  //       setDescription(response.data);
  //     });
  //   }
  const getCategory = () => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
      .then((response) => {
        console.log(response);
        setCategory(response.data);
      });
  };

  const getProduct = () => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      });
  };
  useEffect(() => {
    getProduct();
  }, [])
  
  return (
    <>
      <Header />
      <div>
        <input
          type="text"
          className="input"
          placeholder="Apple Watch,Samsung S21,Mac book Pro,..."
        />
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
        return (
          <div key={props.id}>
            <select className="home-category">
              <option key={props.id}>{props.name}</option>
            </select>
          </div>
        );
      })}

      {products.map((value) => {
        return (
          <div key={value.id}>
            <div className="float-container">
              <div className="float-child">
                <Link to='/description' className="link">
                <div className="div-image">
                  <img src={value.avatar} alt="watch" className="image" />
                  <div className="item-name">{value.name}</div>
                  <div className="item-price">{value.price}</div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      <Link to='/create'>
      <span className="add" onClick={CreateProduct}>+</span>
      </Link>
    </>
  );
};

export default HomePage;
