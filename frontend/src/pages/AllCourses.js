import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
const AllCourses = () => {
  const [courses, setCourses] = useState([]);
useEffect(() => {
    fetchCourses();
  }, []);
const fetchCourses = () => {
    axios
      .get("http://127.0.0.1:8000/api/courses/")
      .then((res) => {
        // console.log(res);
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

	return (
		<div>
		<h1>Featured Products</h1>

			{courses.map ( (course) => ( <div>{course.cid} {course.ccode}
			
			
			<NavLink to={"/Course/" + course.cid}>View</NavLink>
			</div>))}
			
			</div> 
	);



		}
export default AllCourses;