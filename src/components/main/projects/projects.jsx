
import Interests from './interest';
import Card from './Card';
import './projects.css';
import { FaTools } from "react-icons/fa" ;


const Projects = () => {
  
return (
  
<div className="seccion projects" id="projects">
                    <h1 className="header-projects">Projects</h1>
                    <p className="p-projects">Take a look at some of the software that I have developed. Instructions, description and source code in github are avaiable below.</p>
                 
                    <div className="card-project">
                     
                      <div className="project-sidebar">
                        
                        <ul className="project-stack">
                          <li>Python</li>
                          <li>Django</li>
                          <li>PostgreSQL</li>
                          <li>Bootstrap</li>
                          <li>Javascript</li>
                          
                        </ul>
                      </div>

                      <div className="project-main">
                        <div className="project-main-header">
                          <h2 className="project-name">Handy</h2>
                          <span className="project-image"><FaTools size="50px" background="#8ebebc"/></span>
                          </div>
                        <h4>Web app</h4>
                        <p className="project-body">On its most basic and current state, Handy is an app that allows you to create a profile and upload a "Project", pictures or video of something that needs fixing at home like a broken door handle with a description. Contractors can see the Projects and select them. After a contractor has selected your Project yiu will be notified on your profile.Handy, was built using Bootstrap and JS for the front-end as well as Django and PostgreSQL for the server side.</p>
                        <div className="project-button">
                          <input className="view-details-button" type="submit" value="view-details"/>
                        </div>

                      </div>
                    </div>


                            
                    <div className="inspirations">

                    <h2 className="header-projects">Inspirations</h2>
                      <p className="p-projects">This project retrieves data from the Twitter API and dsiplays the latest twitt from 4 people that I find inspirational</p>
                    
                    <section className="container">
                        <div className="card">
                          <div className="card-image card-1"></div>
                          <div className="card-elements">
                          <Card name={'Sam Harris'} id={116994659} description={'Sam is a philopher, neuriscientist, autor and host of the Making Sense podcast'}/>
                        </div>
                        </div>
                    
                        <div className="card">
                          <div className="card-image card-2"></div>
                          <div className="card-elements">
                            <Card name={'Lex Friedman'} id={427089628} description={'Lex is an AI researcher specialized in  autonomus vehicles'} />
                        </div>
                        </div>
                    
                        <div className="card">
                          <div className="card-image card-3"></div>
                          <div className="card-elements">
                            <Card name={'Vitalik'} id={295218901} description={'Vitalik is a cofounder of the cryptocurrency Etherium'}/>
                          </div>
                        </div>

                        <div className="card">
                            <div className="card-image card-4"></div>
                            <div className="card-elements">
                              <Card name={'Elon Musk'} id={44196397} description={'Elon Musk is the founder and CEO of Tesla, Neuralink and SpaceX '}/>
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