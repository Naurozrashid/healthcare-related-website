import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    const {img,service_name,key} =props.service;
    return (
        <div className="col">
             <img style={{ borderRadius:'30px', height: '25rem'}} src={img} className="card-img-top img-style p-3" alt="..."/>
             <h1 style={{fontSize:'2rem',fontWeight:'500'}} className="fw-bold text-center">{service_name}</h1>
             <div className="d-flex justify-content-center mt-4">
             <Link to={`/singleService/${key}`}><button className="btn brdr font-color5">View Details <i className="fas fa-arrow-right"></i></button></Link>
             </div>
            
        </div>
    );
};

export default Services;