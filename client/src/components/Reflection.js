import { React , useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../context/UserProvider.js"

export default function Reflection(props){
  const { quote, description } = props

  const { 
    deleteReflection,
} = useContext(UserContext) 


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
    <div className="reflection-div">
      <div className="reflection-quote" style={randomBackground()}>
        <div className="reflection-overlay">
          <h1 style={{display: "inline"}}>"</h1>  
          <h1>{quote}</h1>
          <h1 style={{display: "inline"}}>"</h1>  

        </div>
        <div className="reflection-text">
        <button className="bookmark" onClick={deleteReflection}><FontAwesomeIcon icon={faBookmark} /></button>
          <h3>Thoughts & Insights</h3>
          <br></br>
          {description}

        </div>  
      </div>
    </div>
  )
}