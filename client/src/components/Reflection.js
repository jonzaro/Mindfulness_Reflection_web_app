import React from 'react'

export default function Reflection(props){
  const { reflections, quote, title, description } = props


  const imageUrls = [];
      for (let i = 1; i <= 10; i++) {
        const imageUrl = `https://source.unsplash.com/random/800x600?nature,forest${i}.jpg`;
        imageUrls.push(imageUrl);
      }

  const randomBackground = () => {
    return {
      height: "250px",
      width: "600px",
      backgroundImage: `url(${imageUrls[Math.floor(Math.random() * imageUrls.length)]})`,
    };
  };
  // const ImageDivs = () => {
  //   return (
  //     <div className="div-cards">
  //       {imageUrls.map((imageUrl, index) => (
  //         <div key={index}  style={randomBackground()}></div>
  //       ))}
  //     </div>
  //   );
  // };
  return (
    <div className="reflection" style={randomBackground()}>
      <h1>{quote}</h1>
      <p>{description}</p>
    </div>
  )
}