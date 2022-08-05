import React, { useEffect, useState } from 'react';
import axios from "axios"
//axios.defaults.withCredentials = true;
const Dashboard = () => {
const auth = localStorage.getItem("user");

   
  return (
    <div className='dashboard'>
    <h1>{JSON.parse(auth).first_name}</h1>
    <img src={JSON.parse(auth).avatar} alt="hello" />
    </div>
  )
}

export default Dashboard