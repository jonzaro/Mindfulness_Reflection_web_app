import React from 'react'
import Reflection from './Reflection.js'

export default function ReflectionList(props){
  const { reflections } = props



  const imageUrls = [];
      for (let i = 1; i <= 100; i++) {
        const imageUrl = `https://source.unsplash.com/random/800x600?nature${i}.jpg`;
        imageUrls.push(imageUrl);
      }
  const randomBackground = () => {
    return {
      height: "600px",
      width: "800px",
      backgroundImage: `url(${imageUrls[Math.floor(Math.random() * imageUrls.length)]})`,
    };
  };
  const ImageDivs = () => {
    return (
      <div className="div-cards">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} style={randomBackground()}></div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {ImageDivs()}
      {reflections.map(reflection => <Reflection {...reflection} key={reflection._id}/>)}
    </div>
    
  
  )
}
