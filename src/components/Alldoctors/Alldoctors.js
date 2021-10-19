import React from 'react';
import './Alldoctor.css'

const Alldoctors = (props) => {
    const {img,doctor_name,designation,visiting_hour,address,Mobile}=props.doctor;
    return (
        <div>
            <div className="col">
            <div style={{height:'100%'}} className="card brdr shadow text-center border border-info">
                <div className="text-center">
                    <img src={img} className="card-img-top p-5 text-center" style={{ borderRadius:'30px',height: '18rem'}} alt="..." />
                </div>
                <div className="card-body h-100">
                    <h4 className="card-title">{doctor_name}</h4>
                    <p className="card-text">{designation}</p>
                    <p className="card-text">Time: {visiting_hour}</p>
                    <p className="card-text">Address: {address}</p>
                    <p className="card-text">Mobile Number: {Mobile}</p>
                    <div className="text-center">
                        <button className="btn brdr font-color5">Appoinment</button>
                    </div>
 
                </div>
            </div>
        </div>
        </div>
    );
};

export default Alldoctors;