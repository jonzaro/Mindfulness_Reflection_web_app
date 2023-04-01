import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'


export default function ReflectionForm(props){
  
  const initInputs = {
    title: "",
    description: "",
  }

  const { addReflection } = props
  // const { addReflection, quotes, setQuotes } = props
  const [inputs, setInputs] = useState(initInputs)

  const {getRandomQuotes, quotes} = useContext(UserContext)

  useEffect(() => {
    getRandomQuotes()
    // fetch('https://api.quotable.io/random')
    // .then(response => response.json())
    // .then(data => {
    // setQuotes(data.content);
    // })
    // .catch(error => console.error(error));
}, [])
    
  const navigate = useNavigate()

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const reflectObj = {
    quote: quotes,
    description: inputs.description
  }

  function handleSubmit(e){
    e.preventDefault()
    addReflection(reflectObj)
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