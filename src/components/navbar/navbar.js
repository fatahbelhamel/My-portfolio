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
        console.log(classe);
    }  
    const closeToggleItems = (e)=>{
       e.preventDefault();
        items.current.classList.remove("hideshow");
        setClasse(items.current.classList[1]);
    }
 
    return (
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div className="items" ref={items}>
            <Link to="main" spy={true} smooth={true} offset={-70} duration={1000} className="item" onClick={closeToggleItems}>Home</Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={1000} className="item" onClick={closeToggleItems}>About</Link>
            <Link to="services" spy={true} smooth={true} offset={-70} duration={1000} className="item" onClick={closeToggleItems}>What I Do</Link>
            <Link to="summary" spy={true} smooth={true} offset={-70} duration={1000} className="item" onClick={closeToggleItems}>Resume</Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={1000} className="item" onClick={closeToggleItems}>Project</Link>
            <Link to="contact" spy={true} smooth={true} offset={-70} duration={1000} className="item" onClick={closeToggleItems}>Contact</Link>
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
