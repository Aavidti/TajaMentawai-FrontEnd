import React, {useState} from 'react';
import './Login.css';

const Login = () => {
  const [passwordVisible,setPasswordVisible] = useState(false);
  const togglePasswordShow = ()=>{
    setPasswordVisible(!passwordVisible);
  }
  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form">
          <h1 className="login-title">Login to TajaMentawai</h1>
          <p className="login-subtitle">Welcome back! Please login to your account.</p>
          <form action="/home-login">
            {/* Email Input */}
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text input_login" style={{borderRight:'none',color:'black'}}>
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="password"
                  className="form-control input_login"
                  placeholder="Email"
                  style={{borderLeft:'none',color:'black'}}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-group mb-3">
              <div className="input-group">
                <span className="input-group-text input_login" style={{borderRight:'none',color:'black'}}>
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="form-control input_login"
                  placeholder="Password"
                  style={{borderRight:'none',borderLeft:'none',color:'black'}}
                />
                <span className="input-group-text input_login"  style={{color:'black'}}
                onClick={togglePasswordShow}
                >
                  {!passwordVisible ? (<i className="bi bi-eye-slash"></i>):(<i className="bi bi-eye"></i>)}
                </span>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-decoration-none text-warning forgot-pass-text">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-primary w-100 button_login">Login</button>
          </form>

          {/* Social Media Login */}
          <p className="text-center mt-3">Or login using</p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-outline-secondary">
              <i className="bi bi-google"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-facebook"></i>
            </button>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-twitter"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="login-side-panel">
        <h1>Hello, Everyone!</h1>
        <p><b>Enter your personal details and start your journey with us</b></p>
        <a href="/register"><button className="btn btn-outline-light btn-signin">Sign Up</button></a>
      </div>
    </div>
  );
};

export default Login;
