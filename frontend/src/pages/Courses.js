
import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../App.css'; 
import Popup from './popup';
import CustomSelect from './CustomSelect';
import { useNavigate, useLocation, UNSAFE_DataRouterStateContext } from 'react-router-dom';

function Courses() {

	const navigate = useNavigate();

	const[isOpen, setIsOpen] = useState(false);

	const togglePopup =() =>{
		setIsOpen(!isOpen);
	}
	const {state} = useLocation();
    const {id, code, name, description} = state;
	const [tagNames, setTagNames] = useState([]); // Initialize tagNames list

	useEffect(() => {
		axios
		
		  .get("/api/tags/") // Update the API endpoint to match your dataset
		  .then((res) => {
			// get all tag names that ar enot difficulty and workload
			const tagNamesList = res.data.slice(10).map((item) => ({
			  label: item.tagname,
			}));
			setTagNames(tagNamesList);
		  })
		  .catch((err) => console.log(err));
	  }, []);

	  const [reviewData, setReviewData] = useState({
		course_id: {},
		Term: "",
		Year: "",
		Professor: "",
		Grade: "",
		Comment: "",
		Difficulty: "",
		Workload: "",
	}); // State to store the review text

	const handleAddReview = (reviewData) => {
		axios
		  .put("/api/reviews/", {
			  course_id: id,
			  Term: Term,
			  Year: Year,
			  Professor: Professor,
			  Grade: Grade,
			  Comment: Comment,
			  Difficulty: Difficulty,
			  Workload: Workload
		  })

	// Access the review data
	const { course_id, Term, Year, Professor, Grade, Comment, Difficulty, Workload } = reviewData;

	 // You can handle the review submission here
	 // For now, just log the review data
	console.log('Term:', Term);
	console.log('Year', Year);
	console.log('Professor', Professor);
	console.log('Grade', Grade);
	console.log('ReviewText', Comment);
	console.log('Difficulty', Difficulty);
	console.log('Workload', Workload);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setReviewData({ ...reviewData, [name]: value });
	};

	function onChangeInput(value){
		console.log(value);
	}
	
	// const {state} = useLocation();
    // const {id, code, name, description} = state;
	return( 
		<div className='courses-container'> 
			<header className="black-bar" > 
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
				<h1 className="course-description-header">{code} - {name}</h1>
                        <p>{description}</p>
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
						name="Term"
						value={reviewData.Term}
						onChange={handleInputChange}
						placeholder='Term(Fall/Winter)'
					/>

					<input 
						type='number'
						name="Year"
						value={reviewData.Year}
						onChange={handleInputChange}
						placeholder='Year'
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
						placeholder='Letter Grade'
					/>					

					<textarea
					rows="4"
					cols="50"
					name="ReviewText"
					value={reviewData.ReviewText}
					onChange={handleInputChange}
					placeholder='Write your review here'
					/>

					<input 
						type='number'
						name="Difficulty"
						value={reviewData.Difficulty}
						onChange={handleInputChange}
						placeholder='Difficulty(1-5)'
					/>
					
					<input 
						type='number'
						name="Workload"
						value={reviewData.Workload}
						onChange={handleInputChange}
						placeholder='Workload(1-5)'
					/>

					<CustomSelect isMulti={true} onChange={onChangeInput} tagNames={tagNames} />
					
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