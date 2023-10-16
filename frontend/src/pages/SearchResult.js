import axios from 'axios';
import React, { useState, useEffect } from "react";
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


    return(
    <div className='Search_results'>
        <div className='search-bar-container'>
        <input
        type="search"
        placeholder="Search for courses..."
        value = {searchInput}
        onChange={(e) => searchItems(e.target.value)}
        className="search-input"/>
        
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
    </div>
    );

}

export default SearchResults;