import axios from 'axios';
import React, { useState, useEffect } from "react";
import '../App.css'; 

function CourseReview() {

    const url = "http://127.0.0.1:8000/api/courses/2/";
    const [data, setData] = useState([
        "cid",
        "ccode",
        "cname",
        "cdesc",
        "course",
    ]);

    const fetchInfo = async() => {
        return axios
        .get(`${url}`)
        .then((res) => setData(res.data));
    };

    useEffect( () => {
    fetchInfo();
    } );

    return (
    <div className="course-review">
        <div className="review-content">
        {data.cname}
        {data.course.map((item) => {
                        return (
                            <table width = "500px" align = "center">
                            <tr>
                                <td>{item.comment}</td>
                            </tr>
                            </table>
                            );
                        })}
        </div>
    </div>
    );
}

export default CourseReview;
