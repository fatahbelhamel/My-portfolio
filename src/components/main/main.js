import './main.css';
import { Link } from "react-scroll";
import videoBac from "../../assets/video1.mp4";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Main = ()=>{
	const text = ['Fatah','a Front-end Web Devlopper'];
	return (
       <div className="main" id="main">
          <video src={videoBac} autoPlay loop muted/>
          <div className="content">
          	<h1 className="content-head">welcom</h1>
          	<h1 className="content-main">Hi, I am &nbsp;
          	<span >
	          <Typewriter
	            words={text}
	            loop
	            Cursor
	            cursorStyle='_'
	            typeSpeed={70}
	            deleteSpeed={50}
	            delaySpeed={1000}  
	          />
          	</span>
          	<span><Cursor /></span></h1>
          	<p>based in Boumerdes, Algeria</p>
          	<Link to="contact" spy={true} smooth={true} affset={50} duration={1000} className="contact-btn">Contact Me</Link>
          	<div className="arrow-down">
              <Link to="about" spy={true} smooth={true} affset={50} duration={1000} ><FontAwesomeIcon icon={faAnglesDown} className="icon"/></Link>
          	</div>
          </div>
       </div>
		)
}

export default Main;