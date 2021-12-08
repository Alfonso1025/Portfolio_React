import React from 'react'
import { FaEnvelope, FaBlog, FaBriefcase, FaUserAlt, FaFacebook, FaGithub, FaTwitter  } from "react-icons/fa";


const Menu = () => {
    return ( 
        <React.Fragment> 
        <ul> 
            <li><a href="#projects" className="scroll"> <FaBriefcase /> <span>Projects</span></a></li>
            <li><a href="#about" className="scroll"><FaUserAlt /><span>About</span></a></li>
            <li><a href="#blog" className="scroll"> <FaBlog /> <span>Blog</span></a></li>
            <li>< a href="#contact" className="scroll"> <FaEnvelope /> <span>Contact</span></a></li>
         
        </ul>

        
            <ul className="social_media">
                <a href="#"><FaTwitter/></a>
                <a href="#"><FaGithub/></a>
                <a href="#"><FaFacebook/></a>
            </ul>
       

        </React.Fragment> 
     );
}
 
export default Menu;