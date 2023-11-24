import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SearchBar from './Search-bar';
import '../App.css'; 




function SearchResults() {

    const url = "http://127.0.0.1:8000/api/courses/";
    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const fetchInfo = async() => {
        return axios
        .get(`${url}?search=${searchInput}`)
        .then((res) => setData(res.data));
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
			<header className="black-bar" > 
				<div className='Connection-container'>
                    <img src='/facebook.png' alt=''></img>
                    <img src='/instagram.png' alt='' ></img>
                    <img src='/twitter.png' alt='' ></img>
                </div>

				<div className='top-right-container'>
				<button className="login-button" onClick={() => navigate('/Login')}>
				Login
				</button>

				</div>
					
			</header>
        
        <div className='search-bar-container'>
        <input
        type="search"
        placeholder="Search for courses..."
        value = {searchInput}
        onChange={(e) => searchItems(e.target.value)}
        className="search-input"/>
        
        </div>

        {searchInput.length > 1 ? (
                    filteredResults.slice(0,3).map((item) => {
                        
                        return (
                            <table width = "500px" align = "center">

                            <tr>
                                 <td><button backgroundColor='#CC0000' onClick={() => navigate('/Course', { state: { id: item.cid, code: item.ccode, name: item.cname, description: item.cdesc, reviews: item.course} })}>{item.ccode} {item.cname} </button></td>
                            </tr>
                            </table>
                        );
                    }
                ) ): (
                    data.slice(0,3).map((item) => {
                        return (
                            <table width = "500px" align = "center">
                            <tr>
                                <td><button backgroundColor='#CC0000' onClick={() => navigate('/Course', { state: { id: item.cid, code: item.ccode, name: item.cname, description: item.cdesc, reviews: item.course} })}>{item.ccode} {item.cname} </button></td>
                            </tr>
                            </table>
                            );
                }
                ))
                }
				<div className="bottom-black-bar">
                <p>@Edmonton,Alberta,Canada Macewan University 2023</p>
            </div>
    </div>
    );
}

export default SearchResults;