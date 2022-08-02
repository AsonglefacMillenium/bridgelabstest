import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://simplor.herokuapp.com/api/user/register", {
        first_name: inputs.first_name,
        last_name: inputs.last_name,
        email: inputs.email,
        phone: inputs.phone,
        password: inputs.password,
        avatar: inputs.avatar,
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
          type="text"
          placeholder="First Name"
          name="first_name"
          value={inputs.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={inputs.last_name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={inputs.phone}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <input
          type="file"
          placeholder="choose avatar"
          name="avatar"
          value={inputs.avatar}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
