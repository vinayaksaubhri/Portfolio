import React from 'react'
import './Css/Navbar.css'
import profile_pic from './Images/profile_pic.png'
function Navbar() {
    return (
       <>
         <div className="navbar">
             <img src={profile_pic} alt="profile pic" className="navbar__img"/>
             <br></br>
             <name className="navbar__name">Vinayak Saubhri</name>
         </div>
       </>
    )
}

export default Navbar
