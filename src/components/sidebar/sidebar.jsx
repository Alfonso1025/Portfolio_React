import Profile from "./profile/profile";
import Menu from "./menu/menu";
import BtnMenu from "./BtnMenu/BtnMenu"
import './sidebar.css'
const Sidebar = (props) => {
    return (
          <>
         
            <aside className="sidebar">
            <Profile />
            <Menu />
            
            

            </aside>

            </>
        
      );
}
 
export default Sidebar;