import React from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem("user");

    const handleLogout = () =>{
        if (auth) {
            localStorage.clear("user");
            navigate('/')
        }
       
    }
    
  return (
    <div>{
        auth ? <h1><Link to="/" onClick={handleLogout}>Logout</Link></h1>
        :
        <div>
        <h1><Link to="/signin">Signin</Link></h1>
        <h1><Link to="/signup">Signup</Link></h1>
        </div>
        
       
    }
       
    </div>
  )
}

export default Home