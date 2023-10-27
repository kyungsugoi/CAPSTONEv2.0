import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css'; 


function Login() {
    const [user, setUser] = useState({});

    const navigate = useNavigate(); // Initialize the navigate function
    



    function handleCallbackResponse(response){
        
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential); 
        console.log("hello",userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
        navigate('/ViewProfile', { state: { user: userObject } });
        
    }



    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;

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

    // if we have no user: sing in btn will be shown '
    // if we have a user show the log out btn 

    return(

        <div className='loginPage-container'>
            <div className="background-image-login">
            </div>
            <div className='login-content'>
            <img src='/Logo.jpg' alt='' style={{ width: '400px', height: '100px' }}></img>
            <h3>---------Login---------</h3>
            <div id="signInDiv"></div>

            {Object.keys(user).length !== 0 && 
            <button onClick={(e) => handleSignOut(e)}>Sign out</button>}
            
            {user &&
            <div>
                    
                    <img src={user.picture} alt=''></img>
                    <h3>{user.name}</h3>
                    </div>}
                    
                    {/* Pass user data to the view-profile component */}
                    </div>
                    
        </div>

    );


};

export default Login;
