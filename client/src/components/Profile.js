import React, { Fragment, useEffect, useContext, useState} from 'react'
import ReflectionForm from './ReflectionForm.js'
import ReflectionList from './ReflectionList.js'
import Reflections from './Reflection.js'
import {UserContext} from "../context/UserProvider.js"

export default function Profile(){
  
  const [profileToggle, setProfileToggle] = useState(false)
  
  const { 
    user: {username }, 
    addReflection,
    reflections
  } = useContext(UserContext)
  

    function toggleProfile(){
      return (
      setProfileToggle(prev => !prev)
      )
    }

    

  return (
    
    <>
    {reflections.length > 0 ? setProfileToggle === true : null}

    { profileToggle ? 

    <div className="profile">
      <div className="quote-container">
        <h1>Welcome {username}!</h1>
        <h3> Here is a quote</h3>
      </div>
      <div className="blinkinb-txt">
        <h3>Take a moment to write your thoughts about this quote.</h3>

      </div>
      <div id="clockdiv">
        *TIMER CODE*
      </div>
      
      <ReflectionForm addReflection={addReflection}/>
      <h3> RENDER REFLECTIONS</h3>
      <ReflectionList reflections={reflections}/>
{/* MAP OF DIVS WITH UNSPLASH IMAGES IS NOT RENDERING IN REFLECTION LIST */}
    </div> : 
      

    <div className="profile-empty">
      <div className="profile-empty-content">
        <h1>Welcome {username}! Your profile doesn't have any content yet...</h1>
        <button className="inspiration-profile-btn" onClick={toggleProfile}>Add some inspiration to your profile</button>
      </div>
    </div>

}
</>
  )
}