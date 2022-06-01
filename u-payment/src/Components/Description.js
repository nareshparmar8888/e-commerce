import React from "react";
import Header from "./Header";
import axios from "axios";
import { useState } from "react";

export const Description = () => {
  const [description, setDescription] = useState([]);

  const getDescription = () => {
    axios
      .get("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/1")
      .then((response) => {
        console.log(response);
        setDescription(response.data);
      });
  };
  return (
    <>
      <Header />
      <button className="data" onClick={getDescription}>
          Load Product
        </button>
        
      {description.map((props) => {
        return (
          <div key={props.id}>
            <div className="desc-image-div">
              <img src={props.avatar} alt="watch" className="desc-image" />
              <h1 className="desc-name">{props.name}</h1>
              <h3 className="desc-price">{props.price}</h3>
            </div>
            <hr className="hr" />
            <h3 className="desc-head">Description</h3>
            <div className="desc-about">{props.description}</div>
          </div>
        );
      })}
    </>
  );
};

export default Description;
