import React from 'react'
import "../Css/app.css"
import "../Css/about.css"
import book_icon from "../Images/book.svg"

function About() {
    return (
      <div className="Main About">
          <text className="About__heading">About Me</text>
          <div className="slider_outer"><div className="slider_inner"></div></div>
          <name className="name">Vinayak <line className="line">Saubhri</line></name>
          <p className="navbar__des About__des">FrontEnd Developer</p>
          <p className="About__bio">I started my journey in the world of the computers form an young age. 
            Now I’m 20 years old. Pursuing my Computer Science and Engineering Degree 
            in Dronacharya College of Engineering. Web development is my center of interest.
            I always love the idea of cross-plaform development.Being a Software Engineer is
            more than just programming.It’s a chance to help other people through the power of
            technology.Having this as a career gives me the power to influence other peoples life
            through programs that could help them with day to day tasks.</p>
          <h1>Education</h1>  
          <div className="About__book_icon "><img src={book_icon} alt="book icon"/></div>
          <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
      </div>
    )
}

export default About
