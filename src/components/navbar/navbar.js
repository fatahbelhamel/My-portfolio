import {Link} from "react-scroll";
import './navbar.css';
import logo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';




const Navbar = ()=>{
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="items">
            <Link className="item">Home</Link>
            <Link className="item">About</Link>
            <Link className="item">Project</Link>
            <Link className="item">Contact</Link>
        </div>
        <div className='btn-toggle'>
            <button><FontAwesomeIcon icon={faBars} /></button>
        </div>
        <div className="icons">
             <FontAwesomeIcon icon = {faFacebook} className="icon"></FontAwesomeIcon>
             <FontAwesomeIcon icon = {faTwitter} className="icon"></FontAwesomeIcon>
             <FontAwesomeIcon icon = {faGithub} className="icon"></FontAwesomeIcon>
             <FontAwesomeIcon icon = {faLinkedin} className="icon"></FontAwesomeIcon>
        </div>
      </nav>
    );
}

export default Navbar;