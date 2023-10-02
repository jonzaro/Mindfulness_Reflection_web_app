import React, { useContext , useState , useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../context/UserProvider.js"
import ReflectionForm from './ReflectionForm.js'

export default function QuotePage() {

    const [showPrompt, setShowPrompt] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const triggerForm = () => {
        setTimeout(() => setShowForm(true), 10000);
    }

    const { 
        user: {username }, 
        addReflection,
        quotes,
        setQuotes,
        getRandomQuotes
    } = useContext(UserContext) 

useEffect(() => {
    getRandomQuotes()
}, [])
    
function nextQuote(){
    getRandomQuotes()
}

const handleShowPrompt = () => {
    setShowPrompt(true)
    triggerForm()
}

    return (
        <>
        <div className="quote-img-container">
            <div className="quote-container">
                <div className="quote-content">
                    <h2>Welcome {username}!</h2>
                    
                    <div className="quote-directions">
                        Find a quote that resonates with you, select it, ponder it, 
                        then write about it.
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
                </div>
            </div>
                <div className="quote-prompt">
                {showPrompt && <div className="blinking-text">Take a few moments to reflect on this quote...</div>}
                <div className="reflection-form">
                    {showForm === true ? <ReflectionForm addReflection={addReflection} quotes={quotes} setQuotes={setQuotes} /> : null}
                </div>
            </div>
        </>
    )
}