// now a search page ??

import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from './Search-bar';
import '../App.css'; 
import Navbar from './navbar';




function SearchResults() {

    const {state} = useLocation();
    const {search} = state;
    const url = "http://127.0.0.1:8000/api/courses/";
    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

	const [tagNames, setTagNames] = useState([]); // Initialize tagNames list

    const fetchInfo = async() => {
        if (searchInput === "") {
            await axios
            .get(`${url}?ccode=${search}`)
            .then((res) => setData(res.data));
        }
        else {
            return axios
            .get(`${url}?ccode=${searchInput}`)
            .then((res) => setData(res.data));
        }
    };

    useEffect( () => {
    fetchInfo();
    } );

	useEffect(() => {
		const axiosTest = async () => {
			try {
				const response = await axios.get("http://127.0.0.1:8000/api/tags/");
				// set tagNames map
				const formattedTagNames = response.data.map(tag => ({
					key: tag.tagid,
					label: tag.tagname
				}));
	
				setTagNames(formattedTagNames);
			} catch (error) {
				console.error("Error fetching tags:", error);
			}
		};
	
		axiosTest();
	}, [data]);

    const calculateTopTags = (reviews) => {
        const tempTagNames = [];
        reviews.forEach(review => {
            if (review.tags) {
                review.tags.forEach(tagId => {
                    const tagIndex = tempTagNames.findIndex(tag => tag.key === tagId);
                    if (tagIndex !== -1) {
                        tempTagNames[tagIndex].value += 1;
                    } else {
                        tempTagNames.push({ key: tagId, value: 1 });
                    }
                });
            }
        });

        return tempTagNames
            .sort((a, b) => b.value - a.value)
            .slice(0, 4);
    };

    const [topTags, setTopTags] = useState([]);

	useEffect(() => {
        if (data.length > 0) {
            const topTagsForCourse = calculateTopTags(data[0].course || []);
            setTopTags(topTagsForCourse);
        }
    }, [data]);
    

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(data)
        }
    }
    const navigate = useNavigate();


	return (
		<div className='search-results'>
			<Navbar />
			<div className='search-bar-container'>
				<input
					type="search"
					placeholder="Search for course..."
					value={searchInput}
					onChange={(e) => searchItems(e.target.value)}
					className="search-input"
				/>
			</div>
	
			{searchInput.length > 1 ? (
				filteredResults.slice(0, 5).map((item) => {
					const topTagsForCourse = calculateTopTags(item.course || []);
					return (
						<div
							className="search-course-information-container"
							key={item.cid}
							onClick={() => navigate(`/Course/${item.cid}`)}
						>
							<div className="description-left-section">
								<h1 className="course-description-header">{item.ccode} - {item.cname}</h1>
								<p>{item.cdesc}</p>
							</div>
							<div className="description-right-section">
								<div className="difficulty-tag">Difficulty: {(item.course.map(datum => datum.difficulty).reduce((a, b) => a + b, 0) / item.course.length || 0).toFixed(1)}/5</div>
								<div className="workload-tag">Workload: {(item.course.map(datum => datum.workload).reduce((a, b) => a + b, 0) / item.course.length || 0).toFixed(1)}/5</div>
								<div className="workload-tag">Total Reviews: {item.course.length || 0}</div>
								{/* Add additional tags as needed */}
								{topTagsForCourse.map((tag) => (
									<div key={tag.key} className="misc-tag">
										{tagNames.find((tagName) => tagName.key === tag.key)?.label}
									</div>
								))}
							</div>
						</div>
					);
				})
			) : (
				data.map((item) => {
					const topTagsForCourse = calculateTopTags(item.course || []);
					return (
						<div
							className="search-course-information-container"
							key={item.cid}
							onClick={() => navigate(`/Course/${item.cid}`)}
						>
							<div className="description-left-section">
								<h1 className="course-description-header">{item.ccode} - {item.cname}</h1>
								<p>{item.cdesc}</p>
							</div>
							<div className="description-right-section">
								<div className="difficulty-tag">Difficulty: {(item.course.map(datum => datum.difficulty).reduce((a, b) => a + b, 0) / item.course.length || 0).toFixed(1)}/5</div>
								<div className="workload-tag">Workload: {(item.course.map(datum => datum.workload).reduce((a, b) => a + b, 0) / item.course.length || 0).toFixed(1)}/5</div>
								<div className="workload-tag">Total Reviews: {item.course.length || 0}</div>
								{/* Add additional tags as needed */}
								{topTagsForCourse.map((tag) => (
									<div key={tag.key} className="misc-tag">
										{tagNames.find((tagName) => tagName.key === tag.key)?.label}
									</div>
								))}
							</div>
						</div>
					);
				})
			)}
			<div className="bottom-black-bar">
				<p>@Edmonton,Alberta,Canada Macewan University 2023</p>
			</div>
		</div>
	);
}


export default SearchResults;