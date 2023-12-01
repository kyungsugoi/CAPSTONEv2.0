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

    const fetchInfo = async() => {
        if (searchInput === "") {
            return axios
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
        <div className='Search_results'>
			<Navbar/>
            <div className='search-bar-container'>
                <input
                    type="search"
                    placeholder="Search for courses..."
                    value={searchInput}
                    onChange={(e) => searchItems(e.target.value)}
                    className="search-input"
                />
            </div>

            {searchInput.length > 1 ? (
                filteredResults.slice(0, 5).map((item) => (
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
                            <div className="difficulty-tag">Difficulty: {item.difficulty}/5</div>
                            <div className="workload-tag">Workload: {item.workload}/5</div>
                            {/* Add additional tags as needed */}
                        </div>
                    </div>
                ))
            ) : (
                data.map((item) => (
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
                            <div className="difficulty-tag">Difficulty: {item.difficulty}/5</div>
                            <div className="workload-tag">Workload: {item.workload}/5</div>
                            {/* Add additional tags as needed */}
                        </div>
                    </div>
                ))
            )}
			<div className="bottom-black-bar">
                <p>@Edmonton,Alberta,Canada Macewan University 2023</p>
            </div>
        </div>
    );
}

export default SearchResults;