import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState(""); // For Architects
  const [errors, setErrors] = useState({});
// for navigation
const navigate=useNavigate();



  const validateForm = () => {
    const newErrors = {};
    if (!role) newErrors.role = "Role is required";
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (role === "Architect" && !bio) newErrors.bio = "Bio is required for Architects";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const userData = {
      role,
      name,
      email,
      phonenumber:phone,
      password,
      address,
      ...(bio && { bio }), 
    };

    // integrating with the backend
    try {
      const response = await axios.post("http://localhost:7009/api/auth/signup", userData);
      if (response.data.message) {  // Success case
        alert(response.data.message || "Signup successful!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle "User already exists" or other 400 errors
        alert(error.response.data.message || "User already exists.");
      } else {
        // Generic error (network/server issues)
        console.error("Signup error:", error);
        alert("An error occurred during signup. Please try again.");
      }
    } 

    // Store data in localStorage (for testing purposes)
    // const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // const updatedUsers = [...existingUsers, userData];
    // localStorage.setItem("users", JSON.stringify(updatedUsers));

    // console.log("Form Submitted:", userData);
    // // alert("Signup successful!");
    // // Redirect to login or profile page
    //   alert("Signup successful!");
    //   navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Role Selection */}
        <div className="form-group">
          <label>Choose Your Role:</label>
          <div className="role-options">
            <label>
              <input
                type="radio"
                name="role"
                value="Client"
                checked={role === "Client"}
                onChange={(e) => setRole(e.target.value)}
              />
              As a Client
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="Architect"
                checked={role === "Architect"}
                onChange={(e) => setRole(e.target.value)}
              />
              As an Architect
            </label>
          </div>
          {errors.role && <span className="error">{errors.role}</span>}
        </div>

        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        {/* Email */}
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

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        {/* Password */}
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

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        {/* Address */}
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>

        {/* Bio (Only for Architects) */}
        {role === "Architect" && (
          <div className="form-group">
            <label>Bio (Expertise):</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Describe your expertise"
              rows="4"
            />
            {errors.bio && <span className="error">{errors.bio}</span>}
          </div>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-button">Sign Up</button>
      </form>

      {/* Already Registered Section with Link */}
      <div className="already-registered">
        <p>If you already registered, please <Link to="/login" className="login-link">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
