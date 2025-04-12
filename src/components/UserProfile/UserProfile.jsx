import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserProfile.css"; // Import the CSS file

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );

  // Fetch user data from the backend
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        setProfileImage(res.data.profileImage || "https://via.placeholder.com/150");
      })
      .catch((err) => console.log(err));
  }, []);

  // Handle profile image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <section className="user-profile-section">
      <div className="user-profile-card">
        {/* Banner */}
        <div className="user-banner">
          <img
            src={user.bannerImage || "https://via.placeholder.com/600x200"}
            alt="Banner"
            className="banner-image"
          />
        </div>

        {/* Avatar */}
        <div className="user-avatar">
          <img src={profileImage} alt="Profile" className="avatar-image" />
          <div className="profile-image-upload">
            <label htmlFor="profile-image-input" className="upload-button">
              +
            </label>
            <input
              id="profile-image-input"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>

        {/* User Info */}
        <div className="user-info">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-title">{user.role}</p>
          <p className="user-location">📍 {user.address}</p>
          <p className="user-bio">
            Email: {user.email} <br />
            Phone: {user.phone}
          </p>

          {/* User Stats (Optional) */}
          <div className="user-stats">
            <div className="stat">
              <span className="stat-value">120</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-value">4.8</span>
              <span className="stat-label">Rating</span>
            </div>
            <div className="stat">
              <span className="stat-value">5+</span>
              <span className="stat-label">Years Exp</span>
            </div>
          </div>

          {/* Actions */}
          <div className="user-actions">
            <button className="edit-profile-button">Edit Profile</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;