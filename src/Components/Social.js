import React from 'react'
import '../Css/social.css'
import { FaGithub,FaTwitter,FaLinkedin,FaInstagram} from "react-icons/fa";
function Social() {
    return (
     
            <div class="social">
            <div class="social_icon">
				<a href="https://github.com/vinayaksaubhri" target="_blank" rel="noopener noreferrer"><FaGithub size="center" color="#333"/></a>
			</div>
			<div class="social_icon">
				<a href="https://twitter.com/VinayakSaubhri" target="_blank" rel="noopener noreferrer"><FaTwitter size="center" color="	#1DA1F2"/></a>
			</div>
			<div class="social_icon">
				<a href="https://www.linkedin.com/in/vinayak-saubhri-3b42ba150/" target="_blank" rel="noopener noreferrer"><FaLinkedin size="center" color="#2867B2"/></a>
			</div>
			<div class="social_icon">
				<a href="https://www.instagram.com/vinayak_saubhri/" target="_blank" rel="noopener noreferrer"><FaInstagram size="center" color="#8a3ab9"/></a>
			</div>
            </div>

    )
}

export default Social
