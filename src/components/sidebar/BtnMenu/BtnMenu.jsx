import './BtnMenu.css'

const BtnMenu = (props) => {
//recibe props
const showSidedar= props.showSidedar

    return ( 
    <button  className={!showSidedar?"hamburger":"hamburger-right"} onClick={props.click}>
        
            <div className="bar"></div>
        
        
        
    
    </button>
     );
}
 
export default BtnMenu;