import { React, useContext } from 'react'
import Reflection from './Reflection.js'
import {UserContext} from "../context/UserProvider.js"

export default function ReflectionList(props){

  const { 
    reflections,
    
  } = useContext(UserContext)
  
  const imageUrls = [];
      for (let i = 1; i <= 10; i++) {
        const imageUrl = `https://source.unsplash.com/random/800x600?minimal${i}.jpg`;
        imageUrls.push(imageUrl);
      }
  const randomBackground = () => {
    return {
      height: "600px",
      width: "800px",
      backgroundImage: `url(${imageUrls[Math.floor(Math.random() * imageUrls.length)]})`,
    };
  };
  return (
    <div className="reflection-container">
      {reflections.map(reflection => <Reflection {...reflection} key={reflection._id} img={imageUrls}/>)}
    </div>
    
  
  )
}
