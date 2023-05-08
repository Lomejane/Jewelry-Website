import React, { useState } from 'react';
import ProfilePictureUploader from './ProfilePictureUploader.js';

const UserProfile = () => {
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  const handleProfilePictureSave = (url) => {
    setProfilePictureUrl(url);
    // Save the download URL to your database or update the user's profile picture
  };

  return (
    <div>
      <h1>User Profile</h1>
      {profilePictureUrl && <img src={profilePictureUrl} alt="Profile" />}
      <ProfilePictureUploader onSave={handleProfilePictureSave} />
    </div>
  );
};

export default UserProfile;
