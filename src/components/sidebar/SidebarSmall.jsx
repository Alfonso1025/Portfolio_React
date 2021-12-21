import React from 'react'
import { FaEnvelope, FaBlog, FaBriefcase, FaUserAlt, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import profilePic from "./profile/profile_portfolio.jpg"

const SidebarSmall= ()=>{

    return(
<aside className="sidebar sidebar-small">
<div className="container-profile-pic">

                <div className="profile-pic-col">
                    <img src={profilePic} alt=""/>
                </div>

                <div className="profile-text-col">
                    <h2>Alfonso R. Elorriaga</h2>
                </div>
        </div>

        <ul> 
            <li><a href="#projects" className="scroll"> <FaBriefcase />Projects</a></li>
            <li><a href="#about" className="scroll"><FaUserAlt />About</a></li>
            <li><a href="#blog" className="scroll"> <FaBlog /> Blog</a></li>
            <li>< a href="#contact" className="scroll"> <FaEnvelope /> Contact</a></li>
         
        </ul>

        <ul className="social_media">
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaGithub/></a>
            <a href="#"><FaFacebook/></a>
          </ul>
</aside>

    )
}

export default SidebarSmall