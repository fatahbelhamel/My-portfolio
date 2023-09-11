import "./about.css";

const About = () => {
	return (
		<div className="about container">
          <h1 className="back-title">About Me</h1>
          <h1 className="title-head">Know Me More</h1>
          <div className="about-main">
             <div className="about-content">
                <h2 className="about-content-head">I'm <span>Fatah Belhamel,</span> a Front-end Web Developer</h2>
                <p className="about-content-text">I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
                   Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>
             </div>
             <div className="about-info">
                <p><strong>Name:</strong> Fatah Belhamel</p>
                <p><strong>Email:</strong> <span className="email">fatahbelhamel32@gmail.com</span></p>
                <p><strong>Age:</strong> 24</p>
                <p><strong>From:</strong> Boumerdes, Algeria</p>
                <button className="btn">Download CV</button>
             </div>
          </div>
		</div>
		)
}

export default About;