import axios from 'axios';
import React, { useState, useEffect } from "react";
//import { Table } from "reactstrap";
import '../App.css'; 
import { useNavigate } from 'react-router-dom';
//import SearchBar from './Search-bar'; // Import the SearchBar component
//import CourseReview from './CourseReviews';


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
    }, []);
    
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
    const handleSignInClick = () => {
        navigate('/SignIn'); // Navigate to the sign-in page
    };
    const handleLoginClick = () => {
        navigate('/Login'); // Navigate to the sign-in page
    };

    return(
    <div className='Search_results'>

        <header className=' black-bar'>
            <h1>Search Results</h1>
            <div className='top-right-container'>
                <button className="sign-in-button" onClick={handleSignInClick}>Sign-In</button>
                <button className="login-button" onClick={handleLoginClick}>Login</button>
            </div>
        </header>

        
                <div className='search-bar-container'>
        <input
        type="search"
        placeholder="Search for courses..."
        value = {searchInput}
        onChange={(e) => searchItems(e.target.value)}/>
        </div>

        {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        
                        return (
                            <table width = "200px" align = "center">

                            <tr>
                                <td>{item.ccode} {item.cname} </td>
                            </tr>
                            </table>
                        );
                    }
                ) ): (
                    data.map((item) => {
                        return (
                            <table width = "200px" align = "center">
                            <tr>
                                <td>{item.ccode} {item.cname} </td>
                            </tr>
                            </table>
                       );
                   }
                ))
                }
        
        <div className="bottom-black-bar"><p>Footer content here</p></div>
    </div>
    );

}

export default SearchResults;