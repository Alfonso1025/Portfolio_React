import './about.css'
import {FaBootstrap, FaReact, FaPython} from "react-icons/fa" ;
import {DiCss3, DiJavascript} from "react-icons/di"
import {SiDjango, SiPostgresql,SiJest} from "react-icons/si"
const About = () => {
    return ( 
        <div className="seccion about" id="about">
            <div className="about-container">
                <div className="css stack"><DiCss3 size="80px" color="blue" /></div>
            
                <div className="bootsrap stack"><FaBootstrap size="80px" color="purple" /></div>
                <div className="js stack"><DiJavascript size="80px" color="yellow"/></div>
                <div className="react stack"><FaReact size="80px" color="skyblue"/></div>
                <div className="python stack"><FaPython size="80px"color="blue" /></div>
                <div className="django stack"><SiDjango size="80px" color="darkgreen" /></div>
                <div className="posgre stack"><SiPostgresql size="80px" color="darkblue" /></div>
                <div className="jest stack" ><SiJest size="80px" color="red"/></div>
            </div>
            
    </div>
     );
}
 
export default About;