import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
				

const Contact = ()=>{
	return (
          <div className="contact container" id="conatct">
	       	 <h1 className="back-title">contact</h1>
	          <h1 className="title-head">Get in Touch</h1>
	          <div className="contact-content">
                 <div className="contact-info">
                 	<h3 className="contact-info-head">Address</h3>
                 	<p className="contact-address">4th Floor, Plot No.22,
						145 Murphy Canyon Rd.
						San Diego CA 2028</p>
					<p className="contact-phone"><FontAwesomeIcon icon={faPhone} className="icon"/>(+213) 0794726818</p>	
					<p className="contact-email"><FontAwesomeIcon icon={faEnvelope} className="icon"/>fatahbelhamel32@gmail.com</p>
					<h3 className="follow-me">Follow me</h3>
					<div className="icons">
			             <FontAwesomeIcon icon = {faFacebook} className="icon"></FontAwesomeIcon>
			             <FontAwesomeIcon icon = {faGithub} className="icon"></FontAwesomeIcon>
			             <FontAwesomeIcon icon = {faLinkedin} className="icon"></FontAwesomeIcon>
			        </div>
                 </div>
                 <div className="contact-form">
                 	<h3 className="contact-form-head">send us a note</h3>
                 	<form action="" method="">
                 	   <div className="input-email">
                 	   		<input type="text" id="name" name="name" placeholder="Email"/>
                 	   </div>
                       <div className="input-message">
                 	   		<textarea id="msg" name="message" placeholder="Tel us more about you needs...."></textarea>
                 	   </div>
                 	   <div className="btn-submit">
                 	   		<button type="submit">Send Message</button>
                 	   </div>
                 	</form>
                 </div>
	          </div>
	       </div>
		)
}

export default Contact;