import React from 'react';
import { useNavigate} from 'react-router-dom'
import Signin from '../auth/Signin';
import './home.css'

//assets import
import HomeImage from '../../images/image2.png'

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
    <div className='home'>
     <div className='home-left'>
        <div className='home-left__landing-text'>
            <h1>Artificial Intelligence driving <br />results for the travel industry</h1>
            <p>Welcome Back please login to your account</p>
        </div>

        <Signin/>
     </div>
     <div className="home-right">
        <div className="home-right__img">
            <img src={HomeImage} alt="bicycle ride" />
        </div>
     </div>
    </div>
  )
}

export default Home