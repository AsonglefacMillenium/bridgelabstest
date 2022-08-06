import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import './dashboard.css'
//axios.defaults.withCredentials = true;
const Dashboard = () => {
   // const navigate = useNavigate();
const auth = localStorage.getItem("user");

  
  return (
    <div className='dashboard'>
    <h1>{JSON.parse(auth).first_name}</h1>
    <img src={JSON.parse(auth).avatar} alt="hello" />

    <div className="addproduct-button ">
        <Link to="/addcategory"><button>Add category</button></Link>
<Link to="/">Add product</Link>
    </div>
    </div>
  )
}

export default Dashboard