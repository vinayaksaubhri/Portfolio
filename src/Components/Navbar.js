import React from 'react'
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
               <button className="navbar__button">Home</button>
               <button className="navbar__button">About</button>
               <button className="navbar__button">Portfolio</button>
               <button className="navbar__button">Contact</button>
             </ul>
         </div>

    )
}

export default Navbar
