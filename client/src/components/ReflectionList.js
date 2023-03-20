import React from 'react'
import Reflection from './Reflection.js'

export default function ReflectionList(props){
  const { reflections } = props

  return (
    <div className="todo-list">
      {reflections.map(reflection => <Reflection {...reflection} key={reflection._id}/>)}
    </div>
  )
}