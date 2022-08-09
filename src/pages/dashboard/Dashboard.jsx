import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./dashboard.css";
//axios.defaults.withCredentials = true;
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  useEffect(() => {
    productList();
  });

  //Fetching the list of products from the server
  const productList = async () => {
    const res = await axios.get(
      "https://simplor.herokuapp.com/api/category/categories", {
        headers: {
            authorization: JSON.parse(localStorage.getItem("token"))
        }
      }
    );
    const data = res.data;
    setProducts(data);
  };

  //delete product function

  const deleteProduct = async (id) => {
    const res = await axios.delete(
      `https://simplor.herokuapp.com/api/category/delete/${id}`
    );

    const data = res.data;

    if (res) {
      productList();
      alert("Product deleted Successfully")
    } else {
      alert("Product cannot be deleted");
    }

    return data;
  };

  return (
    <div className="dashboard">
      <div className="dashboard__user">
        <div className="dashboard__user-welcome">
          <h1>Welcome</h1>
          <p>You have control on what to do</p>
        </div>
        <div className="dashboard__user-avatar">
          <img src={JSON.parse(auth).avatar} alt="user avatar" />
          <p>{JSON.parse(auth).first_name}</p>
        </div>
      </div>

      <div className="addcategory-button ">
      
        <Link to="/addcategory">
          <button>Create category</button>
        </Link>
      </div>

      <div className="productlist">

      <h1>Available Categories</h1>
      <div className="productlist__section">
      {products.map((product) => (
          <div key={product.id} className="productlist__product-main">
            <div className="productlist__image">
              <img src={product.image} alt="category display" />
            </div>
            <p className="productlist__name">{product.name}</p>
            <p className="productlist__description">{product.description}</p>
            <div className="productlist__button">
              <button onClick={() => deleteProduct(product.id)} className="productlist__delete-btn">Delete</button>
              <Link to={`/updateproduct/${product.id}`} >
                <button className="productlist__edith-btn">Edith</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
