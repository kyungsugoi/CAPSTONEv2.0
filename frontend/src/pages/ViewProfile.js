import React from 'react';
import { useState } from 'react';
import '../App.css';
import { useUser } from '../UserContext'; // Import the useUser hook

function ViewProfile() {
  const { user } = useUser(); // Access user data from the context
  const [state, setState] = useState(1);
  
  const action =(index) => {
    setState(index)
  }

  return (
    <div className='App'>
      <h1>View Profile</h1>
      <div className='greeting-text'> Hey,{user.name}</div>
      <div className='box-view'>
        <div className='tabs'>

        <div onClick={() => action(1)} className={`${state === 1 ? 'tab active-tab' : 'tab'}`}>
          Profile 
          </div>
          <div onClick={() => action(2)} className={`${state === 2 ? 'tab active-tab' : 'tab'}`}>
          Account Settings 
          </div>

          <div onClick={() => action(3)} className={`${state === 3 ? 'tab active-tab' : 'tab'}`}>
          Favorite Tags
          </div>

        </div>

      {/* contents */}
      <div className='contents'>
      <div className={`${state === 1 ? "content active-content" : "content"}`}>
        <p> Name: {user.name}</p>
        <p>School: Macewan University</p>
        <p>Expected Year of Graduation: 2024</p>
        </div>


        <div className={`${state === 2 ? "content active-content" : "content"}`}>
        <p>Email: {user.email} </p>
        <p>password: ******</p>
        
        </div>

        <div className={`${state === 3 ? "content active-content" : "content"}`}>
        <p></p>
        <p>GPA booster,Project based,Low Workload
          Group-work</p></div>



      </div>

      </div>


      <div className="bottom-black-bar">
                <p>@Edmonton,Alberta,Canada Macewan University 2023</p>
            </div>

    </div>
    
  

  );
}

export default ViewProfile;
