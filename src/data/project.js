import "../components/portfolio/portfolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Project = (props)=>{
   

	return (
		
		<div className="project" key={props.id}>
            <div className="project-img">
                  <img src={props.image} alt=""/>
                  <div className="overly"></div>
                  <div className="btns">
                        <button><FontAwesomeIcon icon={faEye} className="icon"/></button>
                        <button><FontAwesomeIcon icon={faGithub} className="icon"/></button>
                  </div>
            </div>
            <div className="project-info">
                  <h2 className="project-title">{props.name}</h2>
                  <p className="project-description">{props.description}</p>
            </div>
        </div>

  

       	
		)
}

export default Project;