import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function ReflectionForm(props){
  
  const initInputs = {
    title: "",
    description: "",
  }
  const { addReflection, quotes } = props
  const [inputs, setInputs] = useState(initInputs)

  const navigate = useNavigate()

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addReflection(inputs, quotes)
    setInputs(initInputs)
    navigate('/profile')
  }

  const { title, description } = inputs
  return (
    <>
      <form className="form-style" onSubmit={handleSubmit}>
        
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={handleChange} 
          placeholder="Write your thoughts here"/>
        
        <button>Save Reflection</button>
      </form>
    </>
  )
}