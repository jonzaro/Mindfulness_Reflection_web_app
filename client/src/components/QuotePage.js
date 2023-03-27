import React, { useContext , useState , useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../context/UserProvider.js"


export default function QuotePage() {

    const [quotes, setQuotes] = useState([])
    const [showPrompt, setShowPrompt] = useState(false);
    
    const { 
        user: {username }, 
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
        <div className="quote-container">
            <div className="quote-content">
            <h1 >Welcome {username}!</h1>
            <br></br>
            "  {quotes} "
            {console.log(quotes)}

            </div>

            <button className="pick-quote-button" onClick={handleShowPrompt}>I like this quote</button>
            {showPrompt && <div className="blinking-text">Take a moment to reflect on this quote...</div>}
        
            
            <div id="clockdiv">
            *TIMER CODE*
            </div>
        </div>
        <div className="next-quote">        
            <FontAwesomeIcon icon={faChevronRight} onClick={nextQuote}/>
        </div>
        </>
    )
}