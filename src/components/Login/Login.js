import React from 'react';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
  const { signInUsingGoogle,user,handleEmailChange,handlePasswordChange,handleLogin,error} = useAuth();
  const history = useHistory();
  const location = useLocation();
    const redirect_uri = location.state?.from || '/home';



  const handleGoogleLogin = () => {
    signInUsingGoogle()
        .then(result => {
          console.log(user);
          history.push(redirect_uri)
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
  <div className="d-flex justify-content-center"><button type="submit" className="btn brdr font-color5 mt-4 px-5">Login</button></div>
</form>

            </div>
            <div className="text-center mt-5">
            <h1>New to MEDIKK? <Link to="/registration">Create Account</Link></h1>
                     
                <button
                    className="btn brdr font-color5 ms-5 mt-5 px-5"
                    onClick={handleGoogleLogin}
                ><i className="fab fa-google"></i> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;