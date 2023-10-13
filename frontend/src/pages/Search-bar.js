
/*file for the search bar */
import React from 'react';
import { useNavigate } from 'react-router-dom';
function SearchBar() {

    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate('/search'); // Replace '/search' with the actual path to your search page
    };

    const performSearch = () => {
        // This is where you would add your search logic
        // For example, you can update state or trigger an API request
        // based on the search query entered in the input field.
        //currently just goes to the search page
        handleSearchClick();
    };

    const handleSearchKeyDown = (event) => {
        if (event.key === 'Enter') {
          // Perform the search action here
        performSearch();
        }
    };
    return (

        

    <div className="search-bar">
        <input
        type="search"
        placeholder="Search for courses..."
        onKeyDown={handleSearchKeyDown}
/>
    </div>
    );
}

export default SearchBar;