import React from 'react'
import ReflectionList from './ReflectionList.js'
import Reflection from './Reflection.js'
export default function Public(){
  return (
    <div className="public">
      <div className="public-img-container">
      </div>
      <div className="public-right-side">
        <div className="public-right-content">
          <h1> Start your day with a purposeful moment.</h1>
          <h3>Start by clicking the button. What do you have to lose?</h3>
          <button className="inspiration-btn">Get Inspiration</button>
          <button className="profile-btn">View your reflections</button>
        </div>
      </div>
    </div>
  
  )
}