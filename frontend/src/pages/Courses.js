import React from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import CourseReview from './CourseReviews';

function Courses() {

	const navigate = useNavigate();

	const courseReviews = [
        // Array of course reviews with their data
        { title: 'Review 1', author: 'Author 1', rating: 4.5, text: 'Lorem ipsum...' },
        { title: 'Review 2', author: 'Author 2', rating: 3.8, text: 'Lorem ipsum...' }
        // ...
    ];

	return( 
		<div className='courses-container'> 
			<header className="black-bar" > 
					<h1>Course Name Here</h1>
					<div className='top-right-container'>
					<button className="sign-in-button" onClick={() => navigate('/SignIn')}>
					Sign-In
					</button>
					<button className="login-button" onClick={() => navigate('/Login')}>
					Login
					</button>

					</div>
					
			</header>

			<div className="Course-information-container">
				<header className="course-description" > 
					<h1>Course Description Here</h1>
				</header>
				<header className="course-tags">
					<h1>Course Tags Here</h1>
				</header>
			</div>

			<div className='course-reviews-container'>
				{courseReviews.map((review, index) => (
				// Render the CourseReview component for each review
				<CourseReview key={index} review={review} />
				))}
			</div>

			<div className="bottom-black-bar">
                <p>Footer content here</p>
            </div>
		</div>			
    );

}

export default Courses;