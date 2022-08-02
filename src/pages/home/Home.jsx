import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1><Link to="/signup">Signup</Link></h1>
        <h1><Link to="/signin">Signin</Link></h1>
    </div>
  )
}

export default Home