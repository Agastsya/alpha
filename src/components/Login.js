import React from "react";
import loginImg from "../images/loginForm.svg";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="hero-section">
        <div className="photo">
          <img src={loginImg} alt="Login" />
        </div>
        <div className="section">
          <h1 className="register-heading">
            <span className="registerSpanner">Login</span> Yourself
          </h1>
          <form>
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="inputbox"
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="inputbox"
            />
            <br />
            <button type="submit" className="button">
              Register{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
