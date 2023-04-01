import React, { Fragment, useEffect, useContext, useState} from 'react'
import ReflectionList from './ReflectionList.js'
import Reflections from './Reflection.js'
import { Link, useNavigate } from 'react-router-dom'
import {UserContext} from "../context/UserProvider.js"



export default function Profile(){
  
  
  const { 
    user: {username }, 
    reflections,
    
  } = useContext(UserContext)
  
    const navigate = useNavigate()

  return (
    
    <>

    { reflections  ? 
    
    <div className="profile">
      <div className="profile-container">
        <p className="profile-text">Your favorite quotes and reflections</p>
      <button className="inspiration-btn-profile" onClick={() => navigate('/quotepage')}>Get Inspiration</button>

      </div>
      <ReflectionList/>
    </div> : 
      

    <div className="profile-empty">
      <div className="profile-empty-content">
        <h1>Welcome {username}! Your profile doesn't have any content yet...</h1>

        <button className="inspiration-profile-btn" onClick={() => navigate('/quotepage')}>Add some inspiration to your profile</button>
      </div>
    </div>

}
</>
  )
}