import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initInputs = {
  title: "",
  description: "",
  imgUrl: ""
}

export default function ReflectionForm(props){

  const [inputs, setInputs] = useState(initInputs)
  const { addReflection } = props

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
    addReflection(inputs)
    setInputs(initInputs)
    navigate('/profile')
  }

  const { title, description, imgUrl } = inputs
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