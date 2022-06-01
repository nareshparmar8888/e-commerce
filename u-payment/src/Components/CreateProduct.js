import React, { useState } from "react";
import Header from "./Header";
import Axios from 'axios';

export const CreateProduct = () => {

  const url ="https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
  const [data, setData] = useState({
    name: "",
    description: "",
    avatar: "",
    category: "",
    price: ""
  })

  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
      name: data.name,
      description: data.description,
      avatar: data.avatar,
      category: data.category,
      price: data.price
    })
    .then(res=>{
      console.log(res.data)
    })
  }

  function handle(e){
    const newData={...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }
  return (
    <>
      <Header />
      <h3 className="create-h3">Create Product</h3>
      <form onSubmit={(e)=> submit(e)}>
        <div className="form">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            onChange={(e)=>handle(e)} id="name" value={data.name}
          />
        </div>

        <div className="form">
          <textarea
            className="form-control textarea"
            rows="3"
            placeholder="Description"
            onChange={(e)=>handle(e)} id="description" value={data.description}
          ></textarea>
        </div>

        <div className="form">
          <input type="text" className="form-control" placeholder="Image URL" onChange={(e)=>handle(e)} id="avatar" value={data.avatar} />
        </div>

        <div className="form">
          <select className="form-control"  onChange={(e)=>handle(e)} id="category" value={data.category}>
            <option>Categories</option>
          </select>
        </div>

        <div className="form">
          <input type="text" className="form-control" placeholder="Price" onChange={(e)=>handle(e)} id="price" value={data.price}/>
        </div>

        <div className="form">
          <button className="form-button">Submit</button>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
