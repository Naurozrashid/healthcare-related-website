import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../header-logo-wide.png'
import './Header.css'


const Header = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light  bg-gradiant p-4">
            <div className="container-fluid">
            <NavLink className="navbar-brand d-flex align-items-center fw-bold font-color fs-4" to="#">
            <img src={img} alt="" width="150" className="d-inline-block align-text-top pe-2"/>
                </NavLink> 
            
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse font-color fs-6" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li className="nav-item">
                  <NavLink className="nav-link fs-5 fw-bold text-white" to="/home">Home</NavLink>
                  
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link nav-margin fs-5 fw-bold text-white" to="/login">Login</NavLink> 
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link nav-margin fs-5 fw-bold text-white" to="/logout">Logout</NavLink> 
                  </li>
                  
                  
                 
                </ul>
               
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Header;