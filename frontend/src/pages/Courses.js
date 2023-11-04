import React, { useState } from 'react';
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
import Popup from './popup';
import CustomSelect from './CustomSelect';

function Courses() {

	const navigate = useNavigate();

	const[isOpen, setIsOpen] = useState(false);

	const togglePopup =() =>{
		setIsOpen(!isOpen);
	}

	const [reviewData, setReviewData] = useState({
		Professor: "",
		Grade: '',
		reviewText: '',
		Difficulty: '',
		Workload: '',
	}); // State to store the review text

	const handleAddReview = () => {
	 // Access the review data
	const { Difficulty,Workload,Professor, Grade, reviewText } = reviewData;

	 // You can handle the review submission here
	 // For now, just log the review data
	console.log('Professor:', Professor);
	console.log('Grade:', Grade);
	console.log('Review Text:', reviewText);
	console.log("Difficulty",Difficulty);
	console.log("Workload",Workload);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setReviewData({ ...reviewData, [name]: value });
	};

	function onChangeInput(value){
		console.log(value);
	}
	
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

			<div className="popup-review" >
			<button className="add-review-btn" onClick={togglePopup}>Add a review

			</button>
				{isOpen && <Popup
				handleClose={togglePopup}
				content={<div>
					<h2>Add a review</h2>


					<input 
						type='text'
						name="Workload"
						value={reviewData.Workload}
						onChange={handleInputChange}
						placeholder='Workload'
					/>

					<input 
						type='text'
						name="Difficulty"
						value={reviewData.Difficulty}
						onChange={handleInputChange}
						placeholder='Difficulty'
					/>


					<input 
						type='text'
						name="Professor"
						value={reviewData.Professor}
						onChange={handleInputChange}
						placeholder='Professor'
					/>
					
					<input 
						type='text'
						name="Grade"
						value={reviewData.Grade}
						onChange={handleInputChange}
						placeholder='Grade'
					/>
					<textarea
					rows="4"
					cols="50"
					name="reviewText"
					value={reviewData.reviewText}
					onChange={handleInputChange}
					placeholder='Write your review here'
					/>
					<CustomSelect isMulti={true} onChange={onChangeInput} />
					
					<button onClick={handleAddReview}>Submit Review</button>

					
					</div>}
				/>}
			
			</div>

			<div className="bottom-black-bar">
                <p>Footer content here</p>
            </div>
		</div>			
    );

}

export default Courses;