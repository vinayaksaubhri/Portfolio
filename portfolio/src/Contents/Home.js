import React from 'react'
import '../Css/home.css'
import Typical from 'react-typical'
import Social from '../Components/Social'

function Home() {
    return (
        <div className="Main">
          <name className="Main__name">Vinayak <line className="Main__line">Saubhri</line></name>
          <Typical 
           steps={[ 'A Front-End Developer', 1000 , 'A UI/UX Designer',1000]}
           loop={Infinity}
           wrapper="div"
           className="Main_typingtext"/>
           <Social/>
        </div>
    )
}

export default Home
