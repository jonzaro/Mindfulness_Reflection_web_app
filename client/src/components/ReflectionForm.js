import React, { useState } from 'react'

const initInputs = {
  title: "",
  description: "",
  imgUrl: ""
}

export default function ReflectionForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addReflection } = props

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
  }

  const { title, description, imgUrl } = inputs
  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={handleChange} 
          placeholder="Description"/>
        
        <button>Save Reflection</button>
      </form>
    </>
  )
}