import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css';
import { useUser } from '../UserContext'; // Import the useUser hook

function ViewProfile() {
  const { state } = useLocation();
  const { user } = useUser(); // Access user data from the context

  return (
    <div>
      <h1>View Profile</h1>

      {Object.keys(user).length !== 0 ? (
        <div className='View-Profile-center'>
          <p>Name: {user.name}</p>
          <img src={user.picture} alt={user.name} />
          <p>Email: {user.email}</p>
          <p>School: Macewan University</p>
          <p>Tags most used: GPA booster</p>
          <p>Number of Reviews left: 5</p>
          {/* Add more profile information here */}
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default ViewProfile;
