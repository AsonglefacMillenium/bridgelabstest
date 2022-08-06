import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
//axios.defaults.withCredentials = true;
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  useEffect(() => {
    productList();
  });

  const productList = async () => {
    const res = await axios.get(
      "https://simplor.herokuapp.com/api/category/categories"
    );
    const data = res.data;
    setProducts(data);
  };

  //delete product function

  const deleteProduct = async (id) =>{
    const res = await axios.delete(`https://simplor.herokuapp.com/api/category/delete/${id}`);

    const data = res.data;
   
    if (res) {
        productList();
    
    } else{
        alert("Product cannot be deleted")
    }

    return data;
  }

  return (
    <div className="dashboard">
      <h1>{JSON.parse(auth).first_name}</h1>
      <img src={JSON.parse(auth).avatar} alt="hello" />

      <div className="addproduct-button ">
        <Link to="/addcategory">
          <button>Add category</button>
        </Link>
        <Link to="/">Add product</Link>
      </div>

      <div className="productlist">
        {products.map((product) => (
          <ul key={product.id}>
            <li>
              {" "}
              <img src={product.image} alt="" />
            </li>
            <li>{product.name}</li>
            <li>{product.description}</li>
            <li>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
              <Link to={`/updateproduct/${product.id}`}>
              <button >Edith</button>
              </Link>
              
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
