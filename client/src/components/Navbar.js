import React from 'react'
import { Link } from 'react-router-dom'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Navbar(props){
  const { logout } = props
  
  return (
    <div className="navbar">
      <Link to="/public" ><FontAwesomeIcon className="icon-link" icon={faHouse} /></Link>
      <Link to="/profile" ><FontAwesomeIcon className="icon-link" size="lg" icon={faUser} />
      </Link>
      <button className="logout-btn" onClick={logout}><FontAwesomeIcon icon={faRightFromBracket} />
      <br></br>Logout</button>
    </div>
  )
}