import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SearchBar from './Search-bar';
import '../App.css'; 
import Navbar from './navbar';




function LandingSearchResults() {

    const url = "http://127.0.0.1:8000/api/courses/";
    const [data, setData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const fetchInfo = async() => {
        return axios
        .get(`${url}?ccode=${searchInput}`)
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

    const handleEnterSearch = (event) => {
        if (event.key === 'Enter') 
            navigate(`/search`, {state:{search:event.target.value}})
        }
    

    return(
    <div className='Search_results'>
        <SearchBar />
        <div className='search-bar-container'>
        <input
        type="search"
        placeholder="Search for courses..."
        value = {searchInput}
        onChange={(e) => searchItems(e.target.value)}
        onKeyDown={handleEnterSearch}
        className="search-input"/>
        
        </div>

        {searchInput.length > 1 ? (
                    filteredResults.slice(0,3).map((item) => {
                        
                        return (
                            <table width = "500px" align = "center">

                            <tr>
                                 <td><button className='search-button' onClick={() => navigate(`/Course/${item.cid}`)}>{item.ccode} {item.cname} </button></td>
                            </tr>
                            </table>
                        );
                    }
                ) ): (
                    data.slice(0,0).map((item) => {
                        return (
                            <table width = "500px" align = "center">
                            <tr>
                                <td><button className='search-button' onClick={() => navigate(`/Course/${item.cid}`)}>{item.ccode} {item.cname} </button></td>
                            </tr>
                            </table>
                            );
                }
                ))
                }
    </div>
    );

}

export default LandingSearchResults;