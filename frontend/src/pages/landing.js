
import React from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import SearchResults from './SearchResult';
import { useUser } from '../UserContext'; // Import the useUser hook

function LandingPage() {

    const { user, handleLogout } = useUser(); // Access handleLogout from the context
    
    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate('/Login'); // Navigate to the sign-in page
    };

    const handleViewProfileClick = () => {
        navigate('/ViewProfile')
    }


    return (
        <div className="landing-page">
            <header className="black-bar" >
                <div className='Connection-container'>
                    <img src='/facebook.png' alt=''></img>
                    <img src='/instagram.png' alt='' ></img>
                    <img src='/twitter.png' alt='' ></img>
                </div>


                <div className='top-right-container'>
                    {Object.keys(user).length !== 0 ? (
                    <div>
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                        
                        <button className='ViewProfile-header' onClick={handleViewProfileClick}>hey {user.name}</button>
                        
                    </div>
                    ) : (
                    <button className="login-button" onClick={handleLoginClick}>Login</button>
                    )}
                    
                    </div>
            </header>



            <div className="logo-container">
                <img src='/Logo.jpg' alt='' className='logo'></img>
            </div>
            <div className="centered-text">
                <div className='top-text'>
                <p> Enter your course to get started</p>
                </div>
                <div className='search-bar-container'>
                <SearchResults/>
                </div>
				{/*<div className="Course-Placeholder">
					<button className="course-button" onClick={() => navigate('/search')}>
						View All Courses
					</button>
				</div>
                <button className="course-button" onClick={handleCourseClick}>
                View Courses</button> */}
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