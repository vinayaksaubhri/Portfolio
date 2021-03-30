import React from 'react'
import '../Css/app.css'
import { FaSun } from "react-icons/fa";


let app_button__sun_icon = {fontsize:"100%"};
function Button() {
    return (
        <div className="app_button">
          <FaSun/>
        </div>
    )
}

export default Button
