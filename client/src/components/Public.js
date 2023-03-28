import React from 'react'
import ReflectionList from './ReflectionList.js'
import Reflection from './Reflection.js'
import { Routes, Route, useNavigate } from 'react-router-dom'



export default function Public(){

  const navigate = useNavigate()

  return (
    
    <div className="public">
      <div className="public-img-container">
      </div>
      <div className="public-right-side">
        <div className="public-right-content">
          <h1> Start your day with a purposeful moment.</h1>
          <h3>Start by clicking the button. What do you have to lose?</h3>

          <button className="inspiration-btn" onClick={() => navigate('/quotepage')}>Get Inspiration</button>
          <button className="profile-btn" onClick={() => navigate('/profile')}>View your reflections</button>
        </div>
      </div>
    </div>
  
  )
}