import React from 'react'

export default function Reflection(props){
  const { title, description, imgUrl } = props

  return (
    <div className="reflection">
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={imgUrl} width={300}/>
    </div>
  )
}