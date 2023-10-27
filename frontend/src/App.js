
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from  './pages/landing/land';
import Login from './pages/login'
import SearchResults from './pages/SearchResult'
import Courses from './pages/Courses'
import CourseList from './pages/CourseList'
import TagList from './pages/TagList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/search" element={<SearchResults />} />
		<Route path="/Courses" element={<Courses />} />
		<Route path="/CourseList" element={<CourseList />} /> 
		<Route path="/TagList" element={<TagList />} />

        {/* Add routes for other pages */}
      </Routes>
    </Router>
  );
}
export default App;