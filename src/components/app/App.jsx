
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

  const screenSize= useWindowWidth()




  if(screenSize>900){
  return (


    <div className="wrapper">
      <div className="col1"> 
      
      <Sidebar/>
      
      </div>
     
<div className="col2">

<header  className="header">
  <div class="header-content">

    <h1>Welcome to my Portfolio.</h1>
    <p>I am a web developer </p>
    <p> based in Chicago, Illinois in the United States.</p>
  
  </div>
</header>
 
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

        

      <div ref={ref}>
      {showSidebar && <SidebarSmall/>}
      </div>

        <header className="header">

        <div>
        <BtnMenu  click={clickButtonSidebar}/>
        </div>

        <div class="header-content">

          <h1>Welcome to my Portfolio.</h1>
          <p>I am a web developer </p>
          <p> based in Chicago, Illinois in the United States.</p>
        </div>
          
      </header>

      
      <Projects/>
      <About/>

     
      
      </>
    )
  }
}

export default App;
