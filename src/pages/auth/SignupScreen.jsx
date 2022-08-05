import React from 'react'
import Signup from './Signup'
import './auth.css'
import '../home/home.css'


//asset import
import HomeImage from '../../images/image2.png'

const SignupScreen = () => {
  return (
    <div className='signup__screen'>
     <div className='home-left'>
        <div className='home-left__landing-text'>
            <h1>Artificial Intelligence driving <br />results for the travel industry</h1>
            <p>Welcome Back please login to your account</p>
        </div>

        <Signup/>
     </div>
     <div className="home-right">
        <div className="home-right__img">
            <img src={HomeImage} alt="home image" />
        </div>
     </div>
    </div>
  )
}

export default SignupScreen