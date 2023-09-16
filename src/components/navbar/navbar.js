import {useRef, useState} from "react";
import { Link } from "react-scroll";
import './navbar.css';
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import  "../about/about.js";


const Navbar = ()=>{
    const items = useRef();
    

    const [classe, setClasse] = useState();

    const toggleItems = (e)=>{
        e.preventDefault();
        items.current.classList.toggle("hideshow");
        setClasse(items.current.classList[1]);
    }  
 
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="items" ref={items}>
            <Link to="/" spy={true} smooth={true} affset={50} duration={1000} className="item">Home</Link>
            <Link to="about" spy={true} smooth={true} affset={50} duration={1000} className="item">About</Link>
            <Link to="services" spy={true} smooth={true} affset={50} duration={1000} className="item">What I Do</Link>
            <Link to="summary" spy={true} smooth={true} affset={50} duration={1000} className="item">Resume</Link>
            <Link to="portfolio" spy={true} smooth={true} affset={50} duration={1000} className="item">Project</Link>
            <Link to="contact" spy={true} smooth={true} affset={50} duration={1000} className="item">Contact</Link>
        </div>
        <div className='btn-toggle'>
             <FontAwesomeIcon icon={classe ? faXmark : faBars} onClick={toggleItems}/>
        </div>
        <div className="icons">
             <FontAwesomeIcon icon = {faFacebook} className="icon"></FontAwesomeIcon>
             <FontAwesomeIcon icon = {faGithub} className="icon"></FontAwesomeIcon>
             <FontAwesomeIcon icon = {faLinkedin} className="icon"></FontAwesomeIcon>
        </div>
      </nav>
    );
}

export default Navbar;