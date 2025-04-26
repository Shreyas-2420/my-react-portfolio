import React from "react";
import "./ProfilePhoto.css"; // We'll create this CSS file next

const ProfilePhoto = ({ src, alt }) => (
  <div className="photo-frame">
    <img className="profile-photo" src={src} alt={alt} />
  </div>
);

export default ProfilePhoto;