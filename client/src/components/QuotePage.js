import React, { useContext , useState , useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../context/UserProvider.js"
import ReflectionForm from './ReflectionForm.js'



export default function QuotePage() {

    const [quotes, setQuotes] = useState([])
    const [showPrompt, setShowPrompt] = useState(false);
    
    const { 
        user: {username }, 
        addReflection,
        reflections
    } = useContext(UserContext) 

useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    setQuotes(data.content);
    })
    .catch(error => console.error(error));
}, [])
    
function nextQuote(){
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    setQuotes(data.content);
    })
    .catch(error => console.error(error));
}

const handleShowPrompt = () => {
    setShowPrompt(true);
};

    return (
        <>
        <div className="quote-img-container">
            <div className="quote-container">
                <div className="quote-content">
                    <h1>Welcome {username}!</h1>
                    
                    <div className="quote-directions">
                        Find a quote that resonates with you, select it, ponder it, then write about it.
                    </div>
                    <div className="quote">
                        <h2 style={{display: "inline"}}>"</h2>  
                        {quotes} 
                        <h2 style={{display: "inline"}}>"</h2>
                    </div>
                    <div className="next-quote">        
                        <FontAwesomeIcon  icon={faChevronRight} onClick={nextQuote}/>
                    </div>
                </div>
                <button className="pick-quote-button" onClick={handleShowPrompt}>I like this quote</button>
                {showPrompt && <div className="blinking-text">Take a few moments to reflect on this quote...</div>}
                <div className="reflection">
                    <ReflectionForm addReflection={addReflection}/>

                </div>
            </div>
        </div>
        </>
    )
}