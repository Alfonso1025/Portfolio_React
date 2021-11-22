
import React, {useState, useRef, useEffect} from 'react';
import useWindowWidth from './useWindowWidth';
import SidebarSmall from '../sidebar/SidebarSmall';
import Sidebar from '../sidebar/sidebar';
import './app.css'
 import BtnMenu from '../sidebar/BtnMenu/BtnMenu';
import Projects from '../main/projects/projects';
import About from '../main/about/about';
import Contact from '../main/contact/contact'


function App() {

  const ref= useRef();
  const[showSidebar, setShowSidebar]=useState(false);

  const clickButtonSidebar= ()=>{
    setShowSidebar(!showSidebar)
    console.log(showSidebar)
  };

  useEffect(()=>{
    const checkClickOutside= e =>{
      if(showSidebar && ref.current && !ref.current.contains(e.target)){
        setShowSidebar(false)
      }
      }
      document.addEventListener('click', checkClickOutside);
      return ()=> document.removeEventListener('click',checkClickOutside)
  },[showSidebar]);

  const smallScreen= useWindowWidth()




  if(!smallScreen){
  return (


    <div className="wrapper">
      <div className="col1"> 
      
      <Sidebar/>
      
      </div>
     
<div className="col2">

<header  className="header"></header>
 <Projects/>
 <About/>
 <Contact/>
</div>
      

      </div>
 
  );
  }

  else{
    return(
      <>

      <div>
        <BtnMenu  click={clickButtonSidebar}/>
        </div>

      <div ref={ref}>
      {showSidebar && <SidebarSmall/>}
      </div>
      <header className="header"></header>
      <Projects/>
      <About/>

     
      
      </>
    )
  }
}

export default App;
