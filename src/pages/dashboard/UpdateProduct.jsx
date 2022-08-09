import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./dashboard.css";

const UpdateProduct = () => {
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

   useEffect(() => {
    //prefillProductDetails();
   }, []);
//   const prefillProductDetails = async () => {
//     console.log(params);
//     const res = await axios.post(
//       `https://simplor.herokuapp.com/api/category/update/${params.id}`
//     );
//     const data = res.data;
//     setInputs(res.inputs);
//     return data;
//   };

  const updateProduct = async (e) => {
e.preventDefault()
    const res = await axios.put(
      `https://simplor.herokuapp.com/api/category/update/${params.id}`,
      {
        id: params.id,
        name: inputs.name,
        description: inputs.description,
        image: inputs.image,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        },
      }
    ).catch(err => console.log(err));

    const data = await res.data;

console.log(data)
    if(data) {
        alert("Category successfully updated")
        navigate("/dashboard");
    }
    return data
  };

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="updatecategory">
    <h1>Update This Category </h1>
      <form>
        <input
          type="text"
          placeholder="Category Name"
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
        />

        <input
          type="file"
          placeholder="Select Image"
          name="image"
          value={inputs.image}
          onChange={handleChange}
        />
        <div className="update__button">
          <button type="submit" className="update-btn" onClick={updateProduct}>
            Update Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
