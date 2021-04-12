import React from 'react'
import '../Css/home.css'
import '../Css/app.css'
import Typical from 'react-typical'
import Social from '../Components/Social'

function Home() {
    return (
        <div className="Main Home">
          <name className="name">Vinayak <line className="line">Saubhri</line></name>
          <Typical 
           steps={[ 'A Front-End Developer', 1000 , 'A UI/UX Designer',1000]}
           loop={Infinity}
           wrapper="div"
           className="Main_typingtext"/>
           <div className="slider_outer"><div className="slider_inner"></div></div>

           <Social/>
        </div>
    )
}

export default Home
