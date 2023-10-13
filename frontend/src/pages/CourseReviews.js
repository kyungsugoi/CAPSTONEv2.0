// CourseReview.js compotant file for SearchResults.js not a page its the grey box 
import React from 'react';

function CourseReview({ review }) {
    return (
    <div className="course-review">
        <div className="review-content">
        {/* Display review details (e.g., title, author, rating, text) */}
        <h2>{review.title}</h2>
        <p>By: {review.author}</p>
        <p>Rating: {review.rating}</p>
        <p>{review.text}</p>
        </div>
    </div>
    );
}

export default CourseReview;
