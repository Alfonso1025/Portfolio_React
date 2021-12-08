import './about.css'
import {FaBootstrap, FaReact, FaPython} from "react-icons/fa" ;
import {DiCss3, DiJavascript} from "react-icons/di"
import {SiDjango, SiPostgresql,SiJest} from "react-icons/si"
const About = () => {
    const stackColor="094d4b"
    const spanColor="eafafa"
    return ( 
        <div className="seccion about" id="about">
            <div className="about-container">
                <div className="css stack"><DiCss3 size="50px" color={stackColor} /><span>CSS</span></div>
            
                <div className="bootsrap stack"><FaBootstrap size="50px" color={stackColor} /><span color={spanColor}>Boostrap</span></div>
                <div className="js stack"><DiJavascript size="50px" color={stackColor}/><span>JavaScript</span></div>
                <div className="react stack"><FaReact size="50px" color={stackColor}/><span>React</span></div>
                <div className="python stack"><FaPython size="50px"color={stackColor} /><span>Python</span></div>
                <div className="django stack"><SiDjango size="50px" color={stackColor} /><span>Django</span></div>
                <div className="posgre stack"><SiPostgresql size="50px" color={stackColor} /><span>Postgres</span></div>
                <div className="jest stack" ><SiJest size="50px" color={stackColor}/><span>Jest</span></div>
            </div>
            
    </div>
     );
}
 
export default About;