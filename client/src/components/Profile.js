import React, {useContext} from 'react'
import ReflectionForm from './ReflectionForm.js'
import TodoList from './ReflectionList.js'
import Reflections from './Reflection.js'
import {UserContext} from "../context/UserProvider.js"

export default function Profile(){

  const { 
    user: {username }, 
    addReflection,
    reflections
} = useContext(UserContext)
  return (
    <div className="profile">
      <h3>THIS IS THE PROFILE PAGE</h3>
      <h3> Here is a quote</h3>
      <h3>Here is the timer </h3>
          <div id="clockdiv">*TIMER CODE*</div>
      
      <h1>Welcome {username}!</h1>
      <ReflectionForm addReflection={addReflection}/>
      <h3> RENDER REFLECTIONS</h3>
      <TodoList reflections={reflections}/>
    </div>
  )
}