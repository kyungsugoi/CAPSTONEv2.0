
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from  './pages/landing';
import Login from './pages/login'
import SearchResults from './pages/SearchResult'
import Courses from './pages/Courses'
import CourseList from './pages/CourseList'
import Reviews from './pages/Reviews'
import TagList from './pages/TagList';
import ViewProfile from './pages/ViewProfile';
import CourseReview from './pages/CourseReviews';
// import SearchBar from './pages/Search-bar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Search" element={<SearchResults />} />
		    <Route path="/Course" element={<Courses />} />
		    <Route path="/CourseList" element={<CourseList />} /> 
        <Route path="/Reviewviews" element={<Reviews />} />
        <Route path="/TagList" element={<TagList />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />
		    <Route path="/Reviews" element={<CourseReview />} /> 


        {/* Add routes for other pages */ }
      </Routes>
    </Router>
  );
}
export default App;