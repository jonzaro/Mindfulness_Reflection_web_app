import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
import picSvg from './Diary.gif'


const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)


const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <>
    <div className="landing-container">
      <div className="img-container">
        <p className="site-name">Stillness Starts Here</p>
        <img src={picSvg} width="50%"alt="diary" /><br></br>
        <a href="https://storyset.com/people"  style={{ color: "gray"}}>People illustrations by Storyset</a>
        
      </div>
      <div className="auth-container">
        { !toggle ?
          <>
            <AuthForm 
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign up"
              errMsg={errMsg}
            />
            <p onClick={toggleForm}>click here to login</p>
          </>
        :
          <>
            <AuthForm 
              handleChange={handleChange}
              handleSubmit={handleLogin}
              inputs={inputs}
              btnText="Login"
              errMsg={errMsg}
            />
            <p className="login-text" onClick={toggleForm}>click here create an account</p>
          </>
        }
      </div>
    </div>
    </>
  )
}