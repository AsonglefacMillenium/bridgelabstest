import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    phone: "",
   
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://simplor.herokuapp.com/api/user/login", Headers(""), {
        
        email: inputs.email,
        password: inputs.password,
        
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    //sending request
    sendRequest().then(() => navigate("/signin"));
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
       
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
       
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
