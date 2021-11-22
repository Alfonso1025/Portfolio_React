import {useState} from 'react';
import './projects.css';
import {FaTwitter, FaTools } from "react-icons/fa" ;
import Interests from './interest';
import useFetch from '../../app/useFetch';


const urlElon=  `http://localhost:3000/tweets/44196397`;
const urlSam= `http://localhost:3000/tweets/116994659`;
const urlVitalik = `http://localhost:3000/tweets/295218901`;
const urlLex= `http://localhost:3000/tweets/427089628`;


const Projects = () => {
  //Elon Musk
  const [showTweetElon, setShowTweetElon]= useState(false)
  const getTweettElon= useFetch(urlElon, {isloading:true, data:null});
  const tweettElon= getTweettElon.data
  const elonDescription= 'Elon Musk is the CEO of SpaceX, Tesla and co-founder of neuralink '
  const handleShowTweet= ()=>{
    setShowTweetElon(!showTweetElon)
  }

  //Sam Harris
  const [showTweetSam, setShowTweetSam]= useState(false)
  const getTweettSam= useFetch(urlSam, {isloading:true, data:null});
  const tweetSam= getTweettSam.data
  const SamDescription= 'Sam Harris is a philospher, neuroscientist and host of the "Making sense" podcast '
  const handleShowTweetSam= ()=>{
    setShowTweetSam(!showTweetSam)
  }

  //Vitalik
  const [showTweetVitalik, setShowTweetVitalik]= useState(false)
  const getTweettVitalik= useFetch(urlVitalik, {isloading:true, data:null});
  const tweetVitalik= getTweettVitalik.data
  const vitalikDescription= 'Vitaly Buterin is a programmer co-founder of thecryptocurrency Etherium '
  const handleShowTweetVitalik= ()=>{
    setShowTweetVitalik(!showTweetVitalik)
  }

  //Lex Friedman
  const [showTweettLex, setShowTweettLex]= useState(false)
  const getTweettLex= useFetch(urlLex, {isloading:true, data:null});
  const tweettLex= getTweettLex.data
  const LexDescription= 'Lex Fridman is an AI researcher working on Autonomus vehicles'
  const handleShowTweettLex= ()=>{
    setShowTweettLex(!showTweettLex)
  }
  




  

console.log(tweettElon);
  
    return (


    

<div className="seccion projects" id="projects">
                    <h1>Projects</h1>
                    <p>Take a look at some of the software that I have developed. Instructions, description and source code in github are avaiable below.</p>
                 
                    <div className="card-project">
                     
                      <div className="project-sidebar">
                        <div className="project-image"><FaTools size="50px" background="#8ebebc"/></div>
                        <ul className="project-stack">
                          <li>Python</li>
                          <li>Django</li>
                          <li>PostgreSQL</li>
                          <li>Bootstrap</li>
                          <li>Javascript</li>
                          
                        </ul>
                      </div>

                      <div className="project-main">
                        <h2 className="project-name">Handy</h2>
                        <h4>Web app</h4>
                        <p className="project-body">On its most basic and current state, Handy is an app that allows you to create a profile and upload a "Project", pictures or video of something that needs fixing at home like a broken door handle with a description. Contractors can see the Projects and select them. After a contractor has selected your Project yiu will be notified on your profile.Handy, was built using Bootstrap and JS for the front-end as well as Django and PostgreSQL for the server side.</p>
                        <div className="project-button">
                          <input className="view-details-button" type="submit" value="view-details"/>
                        </div>

                      </div>
                    </div>


                            
                    <div className="inspirations">

                    <h2>Inspirations</h2>
                      <p>This project retrieves data from the Twitter API and dsiplays the latest twitt from 4 people that I find inspirational</p>
                    
                    <section className="container">
                        <div className="card">
                          <div className="card-image card-1"></div>
                          <div className="card-elements">
                          <h3>Sam Harrris</h3>

                             <button className="inspirations-button" onClick={handleShowTweetSam}>Sam last Tweet</button>  
                              {showTweetSam?<p>{tweetSam}</p>:<p>{SamDescription}</p> }
                            
                            <i className="card-icon"><FaTwitter/></i>
                        </div>
                        </div>
                    
                        <div className="card">
                          <div className="card-image card-2"></div>
                          <div className="card-elements">
                          <h3>Lex Friedman</h3>
                          <button className="inspirations-button" onClick={handleShowTweettLex}>Lex´s last tweet</button>
                          {showTweettLex? <p>{tweettLex}</p>: <p>{LexDescription}</p> }
                          <i className="card-icon"><FaTwitter/></i>
                        </div>
                        </div>
                    
                        <div className="card">
                          <div className="card-image card-3"></div>
                          <div className="card-elements">
                          <h3>Vitaly Dmitriyevich</h3>
                         <button className="inspirations-button" onClick={handleShowTweetVitalik}>Vitaly´s last tweet</button>
                          {showTweetVitalik? <p>{tweetVitalik}</p>: <p>{vitalikDescription}</p> }
                          <i className="card-icon"><FaTwitter/></i>
                          </div>
                        </div>

                        <div className="card">
                            <div className="card-image card-4"></div>
                            <div className="card-elements">
                            <h3>Elon Musk</h3>
                            <button className="inspirations-button" onClick={handleShowTweet}>Elon last Tweet</button>
                            {showTweetElon ? <p>{tweettElon}</p>: <p>{elonDescription} </p> }
                            
                            

                            
                            <i className="card-icon"><FaTwitter/></i>
                            </div>
                          </div>
                </section>

             </div>
     
                    
                    <div className="interest-container">
                   <Interests/>
               </div>
                
    </div> 
    );
}
 
export default Projects;