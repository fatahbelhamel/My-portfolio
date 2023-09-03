import './main.css';
import videoBac from "./video.mp4";
import { Typewriter, Cursor } from "react-simple-typewriter";

const Main = ()=>{
	const text = ['Fatah', 'a Web Designer', 'a Web Devlopper', 'a Fullstack Devlopper'];
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
          </div>
       </div>
		)
}

export default Main;