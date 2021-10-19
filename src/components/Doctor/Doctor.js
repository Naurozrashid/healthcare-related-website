import React, { useEffect, useState } from 'react';
import Alldoctors from '../Alldoctors/Alldoctors';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./fakeDoctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div>
           <div className="text-center">
           <h1 className="hedding-style mt-5 text-center animate__animated animate__flip">OUR <span className="text-color fw-bold">DENTISTS</span></h1>
            <span className="divider mb-5 mt-4"></span>
           </div>
           <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
            //   key={doctor.key}
            //   service={doctor}
              doctors.map(doctor => <Alldoctors
                key={doctor.key}
                doctor={doctor}
              >

              </Alldoctors>)
            }
            </div>
        </div>
        </div>
        
    );
};

export default Doctor;