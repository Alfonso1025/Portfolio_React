
import { FaEnvelope, FaBlog, FaBriefcase, FaUserAlt } from "react-icons/fa";

const Menu = () => {
    return ( 
        <ul> <FaEnvelope />
            <li><a href="#projects" className="scroll"> <FaBriefcase />Projects</a></li>
            <li><a href="#about" className="scroll"><FaUserAlt />About</a></li>
            <li><a href="#blog" className="scroll"> <FaBlog /> Blog</a></li>
            <li>< a href="#contact" className="scroll"> <FaEnvelope /> Contact</a></li>
         
        </ul>
     );
}
 
export default Menu;