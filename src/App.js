import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const App = () => {
  return (
    <React.Fragment>
      <main>
        <Router>
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