import React from 'react'
import emailjs from 'emailjs-com';
import './contact.css'


const Contact = () => {

  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendForm('alfonso25elorriaga', "template_twea4g9", e.target, 'user_hixMCK9CUhz3EOAIIHtPH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return ( 
        <footer className="contact" id="contact">
          
            <div className="contact-header">
                <h1>Contact me</h1>
                <p>If you are hiring or would like to work with me in a project or just have suggestion on how to make this website and the projects showed above better, please leave a message.  </p>
                
            </div>
            
            <form  onSubmit={sendEmail} action="">
                <div className="grid-form">
                    <input id="firstname" className="fisrtname" type="text" placeholder="FIRSTNAME"/>
                    <input id="lastname" className="lastname" type="text" placeholder="LASTNAME"/>
                    <input id="email"className="email" type="email" placeholder="EMAIL"/>
                    <input id="company"className="company" type="text" placeholder="COMPANY"/>
                    <textarea id="message" className="message" placeholder="MESSAGE" ></textarea>
                </div>  
                   <div className="align-button">
                     <button className="button"  id="contact-button">
                    SEND MESSAGE
                    </button>
                  
                    </div>
                    
                  </form>
                  
            
             </footer>
                
     );
}
 
export default Contact;