import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'

const App = () => {
  return (
    <React.Fragment>
      <main>
      
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/user" element={<Home/>}></Route>
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  )
}

export default App