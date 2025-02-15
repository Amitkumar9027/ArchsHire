import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Use the same CSS file as the signup page

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login Form Submitted:", { email, password });
      alert("Login successful!");
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit" className="submit-button">
          Login
        </button>
      </form>

      {/* Link to Signup Page */}
      <div className="already-registered">
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;