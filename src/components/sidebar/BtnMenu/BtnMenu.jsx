import './BtnMenu.css'

const BtnMenu = (props) => {


    return ( 
    <button className="hamburger" onClick={props.click}>
        
            <div className="bar"></div>
        
        
        
    
    </button>
     );
}
 
export default BtnMenu;