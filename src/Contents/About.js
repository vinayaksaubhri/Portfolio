import React from 'react'
import "../Css/app.css"
import "../Css/about.css"
import book_icon from "../Images/book.svg"
import {FcCalendar} from "react-icons/fc"

function About() {
    return (
      <div className="Main About">
          <div className="top_container">
            <text className="About__heading">About Me</text>
            <div className="slider_outer About__slider_outer"><div className="slider_inner About__slider_inner"></div></div>
            <name className="name About__name">Vinayak <line className="line">Saubhri</line></name>
            <p className="navbar__des About__des">FrontEnd Developer</p>
            <p className="About__bio">I started my journey in the world of the computers form an young age. 
            Pursuing my Computer Science Degree form Dronacharya College of Engineering. Web development is my center of interest.
            I always love the idea of cross-plaform development.Being a Software Engineer is
            more than just programming.It’s a chance to help other people through the power of
            technology.Having this as a career gives me the power to influence other peoples life
            through programs that could help them with day to day tasks.</p>
          </div>
            <div className="bottom_container"> 
               <div className="education__container">
                 <div className="About__book_icon"><img src={book_icon} alt="book icon"/></div>
                 <div className="vr_line glass">
                     <div className="vr_inner inn1"></div>
                     <div className="vr_inner inn2"></div>
                 </div>
                 <h1 className="About__Education">Education</h1>    
                 <h2 className="About__Btech">B.tech in CSE</h2>
                 <p className="About__clgname">Dronacharya College of Engineering</p>
                 <p className="About__School_time"><FcCalendar className ="About__Calendar_icon"/>Aug 2019-2023</p>
                 <h2 className="About__Btech">High School</h2>
                 <p className="About__clgname">Chiranjiv Bharti School</p>
                 <p className="About__School_time"><FcCalendar className ="About__Calendar_icon"/>May 2018</p>
              </div>
              <div className="skill__container">
                <h2>Skills</h2>
                <div>HTML</div>
                <div>CSS</div>
                <div>JavaScript</div>
                <div>React</div>
                <div>Node</div>
                <div>TypeScript</div>
              </div> 
            </div>
      </div>
    )
}

export default About
