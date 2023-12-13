import React, {useState, useEffect} from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import SearchResults from './LandingSearchResult';
import { useUser } from '../UserContext'; // Import the useUser hook
import SearchBar from './Search-bar';
import LoginPopup from './Login_popup';
import Login from './login';


function LandingPage() {

    const { user, handleLogout } = useUser(); // Access handleLogout from the context
    
    const navigate = useNavigate();

    
    const[isOpen, setIsOpen] = useState(false);
    
    const togglePopup =() =>{
		setIsOpen(!isOpen);
	}
    
    const handleLoginClick = () => {
        navigate('/Login'); // Navigate to the sign-in page
    };

    const handleViewProfileClick = () => {
        navigate('/ViewProfile')
    }


    return (
        
<div className="landing-page">
  <header className="black-bar">
    <div className="Connection-container">
      <img src="/facebook.png" alt=""></img>
      <img src="/instagram.png" alt=""></img>
      <img src="/twitter.png" alt=""></img>
    </div>

<div className="top-right-container">
  {Object.keys(user).length !== 0 ? (
    <div>
      {/* if logged in */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <button
        className="ViewProfile-user-btn"
        onClick={handleViewProfileClick}
      >
        Hey {user.name}
      </button>
    </div>
  ) : (
    <div className="Login-popup">
      <button
        className="Log-in-button"
        onClick={() => {
          // Check if the button clicked is the login button
          if (!isOpen) {
            togglePopup();
          }
        }}
      >
        Login
      </button>

      {isOpen && (
        <LoginPopup
          handleClose={togglePopup}
          content={
            <div>
              <Login/>
            </div>
          }
        />
      )}
    </div>
  )}
</div>
  </header>




            <div className="logo-container">
                <img src='/Logo.jpg' alt='' className='logo'></img>
            </div>
            <div className="centered-text">
                
                <div className='top-text'>
                <p> Enter your class to get started</p>
                </div>
                <div className='search-bar-container'>
                <SearchResults/>
                </div>
            </div>

            <div className="content-container">
                <div className="middle-left">
                <img src="/edit.jpg" alt="" /></div>

                <div className="middle-center">
                <img src="/anonymous.jpg" alt="" /></div>

                <div className="middle-right">
                    <img src="/workload.jpg" alt="" /></div>
            </div>

            <div className="bottom-center">
                <h1> Interested?</h1>
                <p>Sign-up now and never be caught off guard again</p>

                {Object.keys(user).length !== 0 ? (
                    <div>
                        <button className="ViewProfile-btn" onClick={handleViewProfileClick}>ViewProfile</button>
                    </div>
                    ) : (
                        <button className="Log-in-button" onClick={handleLoginClick}>
                        Log-In</button>
                    )}
            </div>


            <div className="bottom-black-bar">
                <p>@Edmonton,Alberta,Canada Macewan University 2023</p>
            </div>



            {/* Add more content here */}

        </div>
        );
}

export default LandingPage;