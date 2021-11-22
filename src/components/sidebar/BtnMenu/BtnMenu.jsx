import './BtnMenu.css'

const BtnMenu = (props) => {


    return ( 
<button
    
    onClick={props.click}
   
    >
        Menu
      </button>
     );
}
 
export default BtnMenu;