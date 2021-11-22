
import profilePic from "./profile_portfolio.jpg"

const Profile = () => {
    return ( 
        <div className="container-profile-pic">

                <div className="profile-pic-col">
                    <img src={profilePic} alt=""/>
                </div>

                <div className="profile-text-col">
                    <h2>Alfonso R. Elorriaga</h2>
                </div>
        </div>
     );
}
 
export default Profile;