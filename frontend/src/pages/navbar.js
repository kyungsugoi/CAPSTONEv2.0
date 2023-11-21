// Navbar.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import SearchResults from './SearchResult';
import { useUser } from '../UserContext'; // Import the useUser hook


function Navbar() {
  const navigate = useNavigate(); // Initialize the navigate function

  const { user, handleLogout } = useUser(); // Access handleLogout from the context

  const handleLogoClick = () => {
    // Navigate to the landing page when the logo is clicked
    navigate('/');
  };

  const handleViewProfileClick = () => {
    navigate('/ViewProfile')
};

const handleLoginClick = () => {
  navigate('/Login'); // Navigate to the sign-in page
};


  return (
    <div className='navbar'>
      <div className='logo-navbar' onClick={handleLogoClick}>
      <img src='/Course_rev_logo_nav.png' alt='' className='logo-navbar'></img>
      </div>

      <div className='search-bar-navbar'>
        <SearchResults />
      </div>
      <div className='top-right-container'>
                    {Object.keys(user).length !== 0 ? (
                    <div>
                        {/*if logged in*/}
                        <button className="logout-button-nav" onClick={handleLogout}>Logout</button>
                        
                        <button className='ViewProfile-user-btn-nav' onClick={handleViewProfileClick}>hey {user.name}</button>
                        
                    </div>
                    ) : (
                        
                    <button className="login-button" onClick={handleLoginClick}>Login</button>
                    )}
                    
                    </div>
    </div>
  );
}

export default Navbar;
