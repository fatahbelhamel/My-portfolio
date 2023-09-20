import ScrollToTop from "react-scroll-to-top";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Footer = ()=>{
	return (
			<div className="footer container">
				<ScrollToTop className="scroll-top" smooth top="100"  width="50" height="50"  component={ <FontAwesomeIcon icon={faArrowUp} className="icon"/> } />
				<h2>Copyright 2023<strong>Fatah</strong>. All Rights Reserved.</h2>
			</div>
		)
}

export default Footer;