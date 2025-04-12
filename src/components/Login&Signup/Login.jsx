import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/authentication/authSlice.js";
import "./Login.css"; // Use the same CSS file as the signup page
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch(); // Get the dispatch function
// navigate 
const navigate=useNavigate();
  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = (e) => {
    // e.preventDefault();
  
    // Validate the form
    // if (validateForm()) {
      // Retrieve stored users from localStorage
      // const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // Find the user with the matching email
      // const user = storedUsers.find((u) => u.email === email);
  
      // if (user) {
        // Check if the password matches
        // if (user.password === password) {
          // dispatch(login(user));
          // console.log("Login successful:", user);
          // alert("Login successful!");
  
          // Save the logged-in user's data to localStorage or state (optional)
          // localStorage.setItem("loggedInUser", JSON.stringify(user));
  
          // Redirect to the home page after logiing in 
          // navigate("/"); 
        // } else {
          // console.log("Incorrect password");
          // alert("Incorrect password. Please try again.");
        // }
      // } else {
        // console.log("User not found");
        // alert("User not found. Please check your email or sign up.");
      // }
    // } else {
      // console.log("Form has errors");
      // alert("Please fix the form errors before submitting.");
    // }
  // };



  // if we use backend 
  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log("submited");
    try {
      const response = await axios.post("http://localhost:7009/api/auth/login", { email, password });

      if (response.status === 200) {
        alert("Login successful!");
        console.log("backend response",response.data)
        localStorage.setItem("token", response.data.token); // Store JWT Token
          // const res=await axios.get("http://localhost:7009/api/auth/login",)
        localStorage.setItem("user", response.data.user)
          dispatch(login({ 
            ...response.data.user, // Pass the email from the backend
          token: response.data.token, // Pass the token from the backend 
        
        }));
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message); // Show server error message
      } else {
        alert("Something went wrong, please try again.");
      }
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