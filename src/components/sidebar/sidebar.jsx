import Profile from "./profile/profile";
import Menu from "./menu/menu";
import BtnMenu from "./BtnMenu/BtnMenu"
import Social from "./social/social";
import './sidebar.css'
const Sidebar = (props) => {
    return (
          <>
         
            <aside className="sidebar">
            <Profile />
            <Menu />
            <Social/>
            

            </aside>

            </>
        
      );
}
 
export default Sidebar;