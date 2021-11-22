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
            
            <form  onSubmit={sendEmail} action="">
                    <input id="firstname" className="fisrtname" type="text" placeholder="FIRSTNAME"/>
                    <input id="lastname" className="lastname" type="text" placeholder="LASTNAME"/>
                    <input id="email"className="email" type="email" placeholder="EMAIL"/>
                    <input id="company"className="company" type="text" placeholder="COMPANY"/>
                    <textarea id="message" className="message" placeholder="MESSAGE" ></textarea>
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