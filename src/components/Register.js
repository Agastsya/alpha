import React, { useState } from "react";
import RegisterImg from "../images/loginSVG.svg";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Registration Successful!");
      } else {
        setMessage(data.err || "Registration Failed");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="hero-section">
        <div className="photo">
          <img src={RegisterImg} alt="Register" />
        </div>
        <div className="section">
          <h1 className="register-heading">
            Please <span className="registerSpanner">Register</span> Yourself
          </h1>
          <form onSubmit={handleRegister}>
            <label>Username</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="inputbox"
              value={formData.username}
              onChange={handleInputChange}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="inputbox"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="inputbox"
              value={formData.password}
              onChange={handleInputChange}
            />
            <br />
            <button type="submit" className="button">
              Register
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default Register;
