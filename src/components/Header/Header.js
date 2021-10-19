import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../header-logo-wide.png'
import useAuth from '../../Hooks/useAuth';
import './Header.css'


const Header = () => {
  const { user, logOut } = useAuth();
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light  bg-gradiant p-2"> 
            <div className="container-fluid">
            <NavLink className="navbar-brand  fw-bold font-color fs-4" to="#">
            <img src={img} alt="" width="150" className="d-inline-block align-text-top px-4 d-flex align-items-center"/>
                </NavLink> 
            
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse font-color fs-6" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li className="nav-item">
                  <NavLink className="nav-link fs-5 fw-bold text-white" to="/home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link fs-5 fw-bold text-white" to="/doctor">Doctors</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link fs-5 fw-bold text-white" to="/about">About us</NavLink>
                  </li>
                  </ul>
                  <div className="ms-auto">
                  { user?.email ? <button className="btn btn-danger fs-5 fw-bold text-white px-5" onClick={logOut}>Logout</button> :
                 <div className="nav-item">
                  <NavLink className="nav-link nav-margin fs-5 fw-bold text-white btn btn-warning ms-2 px-5" to="/login">Login</NavLink> 
                  </div>
                  }
                  </div>
                  
                  <div className="nav-item">
                  <NavLink className="nav-link nav-margin fs-5 fw-bold text-white" to="/contact">Sign in as: {user?.displayName} </NavLink> 
                  </div>
                  </div>
            </div>
          </nav>
        </div>
    );
};

export default Header;