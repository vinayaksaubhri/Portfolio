import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/Navbar.css'
import profile_pic from '../Images/profile_pic.png'
function Navbar() {
    return (
    
         <div className="navbar">
             <img src={profile_pic} alt="profile pic" className="navbar__img"/>
             <br></br>
             <name className="navbar__name">Vinayak <line className="navbar__line">Saubhri</line></name>
             <p className="navbar__des">Software Developer</p>
             <ul className="navbar__button_list">
               <Link to="/">
                <button className="navbar__button">Home</button>
               </Link>
               <Link to="/About">
                <button  className="navbar__button">About</button>
               </Link>
               <Link to="/Portfolio">
                <button  className="navbar__button">Portfolio</button>
               </Link>
               <Link to="/Contact">
                <button className="navbar__button">Contact</button>
               </Link>
             </ul>
         </div>

    )
}

export default Navbar
