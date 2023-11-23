import React, { useState, useEffect } from "react";
import '../App.css'; 
import Navbar from './navbar';

function CourseDisplay(){



    return (
        <div>
          <div className="top">
            <Navbar />
          </div>
      
          <div className="The-box">
            {/* Your content goes here */}
          </div>
        </div>
      );
      

};

export default CourseDisplay