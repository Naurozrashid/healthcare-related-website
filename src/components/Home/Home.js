import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import Choose from '../Choose/Choose';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className="container-fluid">
           <div className="cover">
            <div className=" padding d-flex align-items-center">
            <div>
            <h1 className="text-color-1 margin">Care For Lifetime</h1>
            <h1 className="text-color-2 animate__animated animate__bounceInDown">Let Us Brighten</h1>
            <h1 className="text-color-2 animate__animated animate__bounceInDown">Your Smile</h1>
            <Link to="/home"> <button className="btn brdr font-color5 mt-3">Book Your Dentist <i className="fas fa-arrow-right"></i></button></Link>
            
            </div>
            </div>
           </div>
           <div className="mt-5 text-center">
                <h4 className="text-color">Book Your Appointment</h4>
            <h1 className="hedding-style">Our Services</h1>
            <span className="divider mb-5 mt-4"></span>
          </div>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-3">
            {
              
              services.map(service => <Services
                key={service.key}
                service={service}

              ></Services>)
            }
            </div>
       <div className="container-fluid bg-extra mt-5 text-center ">
                <div className="row">
                  <div className="col-lg-12 col-12 ms-4">
                   <div>
                   <h1 className="mt-4">Get in <span className="hedding-style text-white">touch</span></h1>
                    <h5>Come and visit our quarters or simply send us an email anytime you want. We are open to all suggestions from our audience.</h5>
                   </div>
                  </div>
                  <div className="col-lg-12 col-12 mb-3">
                    <div>
                    <div className="row g-4  align-items-center mt-5 justify-content-center">
                    <div className="col-lg-3 align-items-center con">
                    <i className="fas fa-home size pb-4"></i>
                    <h1>Address</h1>
                    <h5>27th Avenue,</h5>
                    <h5>Dhaka,Bangladesh</h5>
                    </div>
                    <div className="con col-lg-3">
                    <i className="fas fa-phone size pb-4"></i>
                    <h1>Call us</h1>
                    <h5>0-800-777-2331</h5>
                    <h5>0-800-772-3466</h5>
                    </div>
                    <div className="con col-lg-3">
                    <i className="fas fa-envelope-open-text size pb-4"></i>
                    <h1>Message us</h1>
                    <h5>naurozrashid6@gmail.com</h5>
                    <h5>medikk@gmail.com</h5>
                    </div>
                    </div>
                    </div>
              

                  </div>
                </div>
       </div>

           <Choose></Choose>


        </div>
        </div>
    );
};

export default Home;