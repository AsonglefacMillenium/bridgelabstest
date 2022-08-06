import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './header.css'


const Header = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem("user");

    const handleLogout = () =>{
        if (auth) {
            localStorage.clear("user");
            navigate('/')
        }
       
    }
    
  return (
    <div className='header'>

    <div className="header-logo">
        <h1>Digital</h1>
    </div>
    
    <nav className='header-nav'>

    <Link to="/">Home</Link>
    <Link to="">About Us</Link>
    <Link to="">Blog</Link>
    <Link to="">Pricing</Link>
    {
        auth ?
        <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/addcategory">Add category</Link>
         <Link to="/" onClick={handleLogout} >Logout {JSON.parse(auth).email}</Link>
        </div>
         
        :
        <div className='header-nav__auth'>
        <Link to="/signin">Signin</Link>
        <Link to="/signup">Signup</Link>
        </div>
        
       
    }
    </nav>
    
       
    </div>
  )
}

export default Header