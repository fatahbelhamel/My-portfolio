import "./services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faDesktop, faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";


const Services = () => {
	return (
       <div className="services container" id="services">
          <h1 className="back-title">services</h1>
          <h1 className="title-head">What i do ?</h1>
          <div className="services-content">
             <div className="cards">
                <div className="card">
                    <FontAwesomeIcon icon={faWindowMaximize} className="icon"/>
                    <h2 className="card-title">websites developpement</h2>
                    <p className="card-description">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faDesktop} className="icon"/>
                    <h2 className="card-title">webapp developpement</h2>
                    <p className="card-description">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div className="card">
                    <FontAwesomeIcon icon={faTabletScreenButton} className="icon"/>
                    <h2 className="card-title">responsive design</h2>
                    <p className="card-description">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
             </div>
          </div>
       </div>
		)
}

export default Services;