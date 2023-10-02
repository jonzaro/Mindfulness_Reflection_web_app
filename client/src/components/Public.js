import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Public(){

  const navigate = useNavigate()
// this is a comment and an updatte
  return (
    
    <div className="public">
      <div className="public-img-container">
      </div>
      {/* <div className="public-right-side"> */}
        <div className="public-right-content">
          <h1> Start your day with a purposeful moment.</h1>
          <br></br>        
          <h3>Start by clicking the button. What do you have to lose?</h3>
        
          <button className="inspiration-btn" onClick={() => navigate('/quotepage')}>Get Inspiration</button><br></br>
          <button className="profile-btn" onClick={() => navigate('/profile')}>View your reflections</button>
        </div>
      {/* </div> */}
      </div>
)}