
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import LandingPage from  './pages/landing';
import Login from './pages/login'
import SearchResults from './pages/SearchResult'
import Course from './pages/Course'
import CourseList from './pages/CourseList'
import Reviews from './pages/Reviews'
import TagList from './pages/TagList';
import ViewProfile from './pages/ViewProfile';
import AllCourses from './pages/AllCourses';
// import Tags from './pages/tag-dropdown';

// import SearchBar from './pages/Search-bar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Search" element={<SearchResults />} />
		    <Route path="/Course/:id" element={<Course />} />
		    <Route path="/CourseList" element={<CourseList />} /> 
        <Route path="/Reviewviews" element={<Reviews />} />
        <Route path="/TagList" element={<TagList />} />
        <Route path="/ViewProfile" element={<ViewProfile />} />
        <Route path="/AllCourses" element={<AllCourses />} />
		    {/* <Route path="/Reviews" element={<CourseReview />} />  */}
		    {/* <Route path="/tags" element={<Tags />} />  */}



        {/* Add routes for other pages */ }

        
      </Routes>
    </Router>
  );
}
export default App;