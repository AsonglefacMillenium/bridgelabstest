import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";

const Signin = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(
    {
      email: "",
      phone: "",
    },
    []
  );

  useEffect(() => {


    const auth = localStorage.getItem("user");

    if (auth) {
        navigate("/dashboard");
    }
  },[navigate]);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://simplor.herokuapp.com/api/user/", {
        email: inputs.email,
        password: inputs.password,
        headers: {
          
          //"Content-Type": "application/json",
          "Content-Type": "multipart/formdata",
          "Accept": "application/json",
          
        },
      })
      .catch((err) => console.log(err));
    const data = await res.data;

    if (inputs.email) {
      localStorage.setItem("user",JSON.stringify(res.data));
    } else {
      alert("Insert correct credentials");
    }
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    //sending request
    sendRequest().then(() => navigate("/dashboard"));
  };

  return (
    <div className="signin">
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
        <div className="signin__button">
          <button type="submit" className="signin-btn">Signin</button>
          <Link to="/signup">
            <button className="signup-btn">Signin</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
