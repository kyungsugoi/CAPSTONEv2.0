import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; 
import { useUser } from '../UserContext'; // Import the useUser hook


function Login(){

    const { user, setUser } = useUser(); // Access user data from the context

    const navigate = useNavigate(); // Initialize the navigate function
    



    function handleCallbackResponse(response){
        
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential); 
        console.log("hello",userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        navigate('/');
        
    }



    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
        navigate('/');

    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: "74800656920-moo5im21psrutb0vgo4t9r8a5sa2mle8.apps.googleusercontent.com",
            callback: handleCallbackResponse

        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large"}

        );

    },[]);


    return(
        <div className='loginPage-container'>
        <div className='login-content'>
        <img src='/Logo.jpg' alt='' style={{ width: '350px', height: '100px' }}></img>
        <h3>~Student Login~</h3>
        
        <div id="signInDiv" style={{ marginTop: '13px' }}></div>


        {Object.keys(user).length !== 0 && 
        <button onClick={(e) => handleSignOut(e)}>Sign out</button>}
        
        {user &&
        <div>
                
                <img src={user.picture} alt=''></img>
                <h3>{user.name}</h3>
                </div>}
                </div>
                <div className="image-container">
      {/* Stack of books on the left */}
      <img src="bookStack1.png" alt="Stack of Books" className="book-stack1" />

      {/* Fox image */}
      <img src="Login_fox.gif" alt="Fox" className="fox-gif" />

      {/* Another stack of books on the right */}
      <img src="BookStack2.png" alt="Stack of Books" className="book-stack2" />

      {/* Grass in the foreground */}
      <img src="Grass.png" alt="Grass" className="grass" />
    </div>
    </div>



    );

};

export default Login;