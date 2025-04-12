import React, { useState, useRef } from 'react';
import './ProfilePopup.css';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../slices/authentication/authSlice';

// Default profile image
import defaultProfilePic from '../../assets/images/profile.png';

function ProfilePopup({ setPopupOpen }) {
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState(defaultProfilePic);
  const fileInputRef = useRef(null);

  // Get user data from Redux store if available
  const user= useSelector((state)=> state.auth.user)
  // const user = useSelector(state => state.auth.user) || {
  //   name: "User",
  //   email: "user@example.com",
  //   joinDate: "January 2023",
  //   location: "New York, USA"
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        // Here you would typically upload the image to your backend
        // and update the user's profile picture in your Redux store
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile-popup-container">
      <div className="profile-popup-header">
        <div className="profile-image-container" onClick={handleImageClick}>
          <img 
            src={profileImage} 
            alt="Profile" 
            className="profile-image"
          />
          <div className="profile-image-overlay">
            <span>Change Photo</span>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        <h3 className="profile-popup-heading">{user.name}</h3>
      </div>
      <div className="profile-popup-body">
        <div className="profile-popup-content">
          <div className="profile-popup-info">
            <p className="profile-popup-text profile-name">{user.name}</p>
            <p className="profile-popup-text">Email: {user.email}</p>
              {/* <p className="profile-popup-text">Member since: {user.joinDate}</p>
              <p className="profile-popup-text">Location: {user.location}</p> */}
          </div>
          <button 
            className="profile-popup-logout-btn" 
            onClick={() => { dispatch(logout()); setPopupOpen(false); }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePopup;