import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Signin from './pages/auth/Signin'
import SignupScreen from './pages/auth/SignupScreen'
import ViewCategories from './pages/dashboard/ViewCategories'
import CreateCategories from './pages/dashboard/CreateCategories'
import Dashboard from './pages/dashboard/Dashboard'
import PrivateComponent from './components/PrivateComponent'
import UpdateProduct from './pages/dashboard/UpdateProduct'
import './App.css'

const App = () => {
  const auth = localStorage.getItem("user");
  return (
    <React.Fragment>
      <main>
      
        <Router>
        <Header/>
          <Routes>
            <Route path="/" exact element={<Home/>}></Route>
            <Route path="/user" exact element={<Home/>}></Route>
            <Route path="/signup" element={<SignupScreen/>}></Route>
            <Route path="/signin" element={<Signin/>}></Route>
           

            
            {/*Dashboard routes */}
            <Route element={<PrivateComponent/>}>

            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/dashboard/category' element={<ViewCategories/>}></Route>
            <Route path='/addcategory' element={<CreateCategories/>}></Route>
            <Route path='/updateproduct/:id' element={<UpdateProduct/>}></Route>
            </Route>
            
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  )
}

export default App