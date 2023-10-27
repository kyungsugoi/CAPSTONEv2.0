import React from 'react';
import { useLocation } from 'react-router-dom';
import '../App.css'; 

function ViewProfile() {
    const { state } = useLocation();
  const user = state && state.user;

  return (
    <div>
      <h1>View Profile</h1>
      {user && (
        <div className='View-Profile-center'>
          <p>Name: {user.name}</p>
          <img src={user.picture} alt={user.name} />
          <p>Email: {user.email}</p>
          <p>School: Macewan University</p> 
          <p>Tags most used: GPA booster</p>
          <p>Number of Reviews left: 5 </p>
          {/* Add more profile information here */}
        </div>
      )}
    </div>
  );
}

export default ViewProfile;
