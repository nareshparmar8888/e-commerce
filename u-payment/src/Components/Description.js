import React from "react";
import Header from "./Header";
import logo from './../watch.jpg';

export const Description = () => {
  return (
    <>
      <Header />
          <>
            <div className="desc-image-div">
              <img src={logo} alt="watch" className="desc-image" />
              <h1 className="desc-name">Apple</h1>
              <h3 className="desc-price">5000</h3>
            </div>
            <hr className="hr" />
            <h3 className="desc-head">Description</h3>
            <div className="desc-about">Lorem 20</div>
            </>
    </>
  );
};

export default Description;
