import './main.css';
import videoBac from "../../assets/video.mp4";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Main = ()=>{
	const text = ['Fatah','a Front-end Web Devlopper'];
	return (
       <div className="main">
          <video src={videoBac} autoPlay loop muted/>
          <div className="content">
          	<h1 className="content-head">welcom</h1>
          	<h1 className="content-main">Hi, I am &nbsp;
          	<span >
	          <Typewriter
	            words={text}
	            loop
	            cursor
	            cursorStyle='_'
	            typeSpeed={70}
	            deleteSpeed={50}
	            delaySpeed={1000}  
	          />
          	</span>
          	<span><Cursor /></span></h1>
          	<p>based in Boumerdes, Algeria</p>
          	<button>Hire Me</button>
          	<div className="arrow-down">
              <FontAwesomeIcon icon={faAnglesDown} className="icon"/>
          	</div>
          </div>
       </div>
		)
}

export default Main;