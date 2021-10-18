import React from 'react';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
  const { signInUsingGoogle,user,handleEmailChange,handlePasswordChange,handleLogin,error} = useAuth();
  const history = useHistory();



  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
          console.log(user);
          history.push('./home')
        })
}

    return (
        <div>
            <h1 className="text-center mt-5 f-size">Login</h1>
           <div className="d-flex justify-content-center align-items-center">
           <form className="container" onSubmit={handleLogin}>
  <div className="mb-3 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label f-sizeinput">Email address</label>
    <input type="email"  onBlur={handleEmailChange} className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label f-sizeinput">Password</label>
    <input type="password" onBlur={handlePasswordChange} className="form-control mt-4" id="exampleInputPassword1" required/>
  </div>
  <div className="row mb-3 text-danger">{error}</div>
  <button type="submit" className="btn-regular mt-5">Login</button>
</form>

            </div>
            <div className="text-center mt-5">
            <h1>New to MEDIKK? <Link to="/registration">Create Account</Link></h1>
                     
                <button
                    className="btn-regular ms-5 mt-5"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google"></i> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;