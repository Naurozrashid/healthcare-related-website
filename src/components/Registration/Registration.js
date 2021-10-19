import React from 'react';
import { Link,useHistory  } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Registration = () => {
  const { signInUsingGoogle,handleNameChange,handleEmailChange,handlePasswordChange,handleRegistration,error} = useAuth();
  const history = useHistory();



  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
          history.push('./login')
        })
}
    return (
        <div>
            <h1 className="text-center mt-5 f-size">Create Account</h1>
            <div className="d-flex justify-content-center align-items-center">
           <form className="container" onSubmit={handleRegistration}>
  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label f-sizeinput">Enter Your Full Name</label>
    <input type="text" className="form-control mt-4" onBlur={handleNameChange} id="text" aria-describedby="name" required/>
  </div>
  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label f-sizeinput">Email address</label>
    <input type="email" className="form-control mt-4" onBlur={handleEmailChange} id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label f-sizeinput">Password</label>
    <input type="password" className="form-control mt-4" onBlur={handlePasswordChange} id="exampleInputPassword1" required/>
  </div>
  <div className="row mb-3 text-danger">{error}</div>
  <div className="d-flex justify-content-center"><button type="submit" className="btn brdr font-color5 mt-5">Register</button></div>
</form>

            </div>
            <div className="text-center mt-5">
            <h1>Already Register? <Link to="/login">Go to login</Link></h1>
                     
                <button
                    className="btn brdr font-color5 ms-5 mt-5"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google"></i> Google Sign In</button>
            </div>
        </div>
    );
};

export default Registration;