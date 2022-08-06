import React, {useState} from 'react'
import axios from 'axios'
import './dashboard.css'

const CreateCategories = () => {
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    description: "",
    
  }); 
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendAddCategoryRequest = async (e) =>{
    e.preventDefault();
    const categoryId = JSON.parse(localStorage.getItem("user")).id
    const res = await axios.post("https://simplor.herokuapp.com/api/category/create", {
    id: categoryId,  
    name: inputs.name,
      description: inputs.description,
      image: inputs.image,
      headers: {
        "Content-Type": "multipart/formdata",
        "Accept": "/"
      }
    }).catch(err => console.log(err));

    const data = await res.data;
    console.log(data)
    return data

  }

  // const addCategory = () =>{
  //   sendAddCategoryRequest().then(() => JSON.stringify(res.data))
  // }
  return (
    <div className='createcategory'>
       <form onSubmit={sendAddCategoryRequest}>
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
        <div className="signin__button">
        <button type="submit" className="signin-btn">Add Cat</button>
       
        </div>
       
      </form>
    </div>
  )
}

export default CreateCategories