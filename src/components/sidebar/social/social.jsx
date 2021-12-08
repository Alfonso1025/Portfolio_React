
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Social = () => {
    return ( 

        <div className="social_media_container">
            <ul className="social_media">
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaGithub/></a>
            <a href="#"><FaFacebook/></a>
          </ul>
        </div>
        
     );
}
 
export default Social;