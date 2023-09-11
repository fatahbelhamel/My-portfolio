import {useRef, useState} from "react";
import {Link} from "react-scroll";
import './navbar.css';
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark} from '@fortawesome/free-solid-svg-icons';


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
            <Link className="item">Home</Link>
            <Link className="item">About</Link>
            <Link className="item">What I Do</Link>
            <Link className="item">Project</Link>
            <Link className="item">Contact</Link>
        </div>
        <div className='btn-toggle'>
             <FontAwesomeIcon icon={classe ? faXmark : faBars} onClick={toggleItems}/>
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