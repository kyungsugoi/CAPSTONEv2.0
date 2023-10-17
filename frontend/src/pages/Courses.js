import React from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';

function Courses() {

	const navigate = useNavigate();

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

			<div className="course-information-container">
				<div className="description-left-section">
					<h1 className="course-description-header">CMPT101</h1>
					<p>This is an introductory computer science course where students learn basic algorithms and basic python coding. Students are also introduced to the assembly language of the computer.</p>
				</div>
				<div className="description-right-section">
				<div className="difficulty-tag">Difficulty: 3/5</div>
					<div className="workload-tag">workload: 3/5</div>
					<div className="misc-tag">Group Work</div>
					<div className="misc-tag">Weekly quizzes</div>
					<div className="misc-tag">Weekly quizzes</div>
				</div>
			</div>

			<div className='course-reviews-container'>
				<div className="review-left-section">
					<p>Username</p>
					<p>Professor: Cobzas</p>
					<p>Grade received: A-</p>
				</div>
     			<div className="review-middle-section">
					<p>This class was very interesting, everyone should try and take this it if they can!</p>
				</div>
      			<div className="review-right-section">
					<div className="difficulty-tag">Difficulty: 3/5</div>
					<div className="workload-tag">workload: 3/5</div>
					<div className="misc-tag">Group Work</div>
					<div className="misc-tag">Weekly quizzes</div>
					<div className="misc-tag">Weekly quizzes</div>
				</div>
			</div>

			<div className="bottom-black-bar">
                <p>Footer content here</p>
            </div>
		</div>			
    );

}

export default Courses;