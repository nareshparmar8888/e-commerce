import React from "react";
import Header from "./Header";

export const CreateProduct = () => {
    return (
        <>
        <Header />
        <h3 className="create-h3">Create Product</h3>
      <form>
        <div className="form">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
          />
        </div>

        <div className="form">
          <textarea
            className="form-control textarea"
            rows="3"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="form">
          <input type="text" className="form-control" placeholder="Image URL" />
        </div>

        <div className="form">
          <select className="form-control">
            <option>Categories</option>
          </select>
        </div>

        <div className="form">
          <input type="text" className="form-control" placeholder="Price" />
        </div>


        <div className="form">
          <button className="form-button">Submit</button>
        </div>
      </form>
        </>
    )
}

export default CreateProduct;