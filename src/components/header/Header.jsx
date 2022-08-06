import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Backdrop from "../BackDrop";
import "./header.css";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const drawerOpen = () => {
    setDrawerIsOpen(true);
  };
  const drawerClose = () => {
    setDrawerIsOpen(false);
  };
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const handleLogout = () => {
    if (auth) {
      localStorage.clear("user");
      navigate("/");
    }
  };

  return (
    <div className="header">
      {drawerIsOpen && <Backdrop onClick={drawerClose} />}

      <div className="header-logo">
        <h1>Digital</h1>
      </div>

      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="">About Us</Link>
        <Link to="">Blog</Link>
        <Link to="">Pricing</Link>
        {auth ? (
          <div>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/addcategory">Add category</Link>
            <Link to="/" onClick={handleLogout}>
              Logout {JSON.parse(auth).email}
            </Link>
          </div>
        ) : (
          <div className="header-nav__auth">
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </nav>
      {drawerIsOpen && (
        <SideDrawer onClick={drawerClose}>
          <nav className="main-nav">
            <Link to="/" className="drawer-link">Home</Link>
            <Link to=""  className="drawer-link">About Us</Link>
            <Link to=""  className="drawer-link">Blog</Link>
            <Link to=""  className="drawer-link">Pricing</Link>
            {auth ? (
              <div>
                <Link to="/dashboard"  className="drawer-link">Dashboard</Link>
                <Link to="/addcategory"  className="drawer-link">Add category</Link>
                <Link to="/" onClick={handleLogout}  className="drawer-link">
                  Logout {JSON.parse(auth).email}
                </Link>
              </div>
            ) : (
              <div className="header-nav__auth">
                <Link to="/signin"  className="drawer-link">Signin</Link>
                <Link to="/signup"  className="drawer-link">Signup</Link>
              </div>
            )}
          </nav>
        </SideDrawer>
      )}
      <button className="main-navigation__menu-btn" onClick={drawerOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Header;
