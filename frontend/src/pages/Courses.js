import React, {useState, useEffect} from 'react';
import '../App.css';
import Popup from './popup';
import CustomSelect from './CustomSelect';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';
import { useUser } from '../UserContext'; // Import the useUser hook to acsses the user data 

function Courses() {

    const url = "http://127.0.0.1:8000/api/courses";

	const navigate = useNavigate();
	const {state} = useLocation();
    const {id, code, name, description, reviews} = state;
	let course_id = parseInt(id);
	const[isOpen, setIsOpen] = useState(false);

	
	const workloadsum = reviews.map(datum => datum.workload).reduce((a, b) => a + b, 0)
	const difficultysum = reviews.map(datum => datum.difficulty).reduce((a, b) => a + b, 0)
	const reviewsum = reviews.length

	const togglePopup =() =>{
		setIsOpen(!isOpen);
	}
	
	// const refreshList = () => {
	// 	axios
	// 	  .get(`/api/courses/${course_id}`)
	// 	  .then((res) => this.setState({ reviews: res.course}))
	// 	  .catch((err) => console.log(err));
	//   };

	const [tagNames, setTagNames] = useState([]); // Initialize tagNames list

	const { user } = useUser(); // Access user data from the context
	const [userName, setUserName] = useState(user.name); // State variable to store user name

	useEffect(() => {
		// Update userName when user.name changes
		setUserName(user.name);
	  }, [user.name]); // The effect will re-run when user.name changes

useEffect(() => {
  const axiosTest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/tags/");
      const formattedTagNames = response.data.map(tag => ({
        value: tag.tagid, // or use another unique identifier from your data
        label: tag.tagname // or use another property that represents the tag name
      }));
      setTagNames(formattedTagNames);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  axiosTest();
}, []);

	

	const [reviewData, setReviewData] = useState({
		course_id: course_id,
		Term: "",
		Year: "",
		Professor: "",
		Grade: "",
		Comment: "",
		Difficulty: "",
		Workload: "",
	}); // State to store the review text

	const handleInputChange = (e) => {
		const {name, value } = e.target;
		setReviewData({ ...reviewData, [name]: value });

	};

	function onChangeInput(value){
		console.log(value);
	}
	const {Term, Year, Professor, Grade, Comment, Difficulty, Workload } = reviewData;

	const handleAddReview = () => {


	axios
		.post("http://127.0.0.1:8000/api/reviews/", {
			course_id: course_id,
			term: Term,
			year: Year,
			professor: Professor,
			grade: Grade,
			comment: Comment,
			difficulty: Difficulty,
			workload: Workload,
		})
		// .then((res) => navigate('/Course', { state: { id, code, name, description, reviews} }))
		.then((res) => navigate('/'))
		// .then((res) => refreshList())

		.catch(function(error) {
			console.log(error);
		});
	
	

	};
	// const {state} = useLocation();
    // const {id, code, name, description} = state;
	return( 
		<div className='courses-container'> 
		<Navbar/>
	

			<div className="course-information-container">
				<div className="description-left-section">
				<h1 className="course-description-header">{code} - {name}</h1>
                        <p>{description}</p>
				</div>
				
				<div className="description-right-section">
					<div className="total-tag">Total Reviews: {reviewsum}</div>
					<div className="difficulty-tag">Difficulty: {Number(difficultysum/reviewsum).toFixed(1) || 0}/5</div>
					<div className="workload-tag">workload: {Number(workloadsum/reviewsum).toFixed(1) || 0}/5</div>
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
					name="Comment"
					value={reviewData.Comment}
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
					
					<button onClick={handleAddReview} type="button">Submit Review</button>
					{/* <button onClick={() => {
						axios
							.post("http://127.0.0.1:8000/api/reviews/", {
								course_id:1,
								term: "Fall",
								year: 2020,
								professor: "ElHajj",
								grade: "B",
								comment: "YEAH",
								difficulty: 4,
								workload: 3,
							})
							.then(function(response) {
								console.log(response);
							})
							.catch(function(error) {
								console.log(error);
							});
					}}>Submit Review</button> */}


        
        </div>}
    />}

</div>



			{reviews.map((item) => {
              return(
				  <div className='course-reviews-container'>
				<div className="review-left-section">
					<p>Username: {userName}</p>
					<p>Professor: {item.professor}</p>
					<p>Grade received: {item.grade}</p>
				</div>
     			<div className="review-middle-section">
					<p>{item.comment}</p>
				</div>
      			<div className="review-right-section">
					<div className="difficulty-tag">Difficulty: {item.difficulty}/5</div>
					<div className="workload-tag">workload: {item.workload}/5</div>
					<div className="misc-tag">Group Work</div>
					<div className="misc-tag">Weekly quizzes</div>
					<div className="misc-tag">Weekly quizzes</div>
				</div>
			</div> 
              );
            })}
			






			<div className="bottom-black-bar">
                <p>@Edmonton,Alberta,Canada Macewan University 2023</p>
            </div>
		</div>			
    );

}

export default Courses;