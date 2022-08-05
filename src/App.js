import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import SignupScreen from './pages/auth/SignupScreen'
import ViewCategories from './pages/dashboard/ViewCategories'
import CreateCategories from './pages/dashboard/CreateCategories'
import Dashboard from './pages/dashboard/Dashboard'

const App = () => {
  return (
    <React.Fragment>
      <main>
      
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<SignupScreen/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/user" element={<Home/>}></Route>

            {/*Dashboard routes */}
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/dashboard/category' element={<ViewCategories/>}></Route>
            <Route path='/dashboard/addcategory' element={<CreateCategories/>}></Route>
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  )
}

export default App