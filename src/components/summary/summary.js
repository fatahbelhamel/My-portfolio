import "./summary.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const Summary = () => {
	return (
       <div className="summary container" id="summary">
          <h1 className="back-title">Summary</h1>
          <h1 className="title-head">Resume</h1>
          <div className="summary-content">
            <div className="cards">
                <h2 className="summary-content-head">My Education</h2>
                <div className="card">
                    <h3 className="card-title-date">2019 - 2022</h3>
                    <h2 className="card-title">web developpement</h2>
                    <h2 className="card-sub-title">INSFP/National Specialized Institue for Vocational Training / Ben Hammouda Boumerdes</h2>
                    <p className="card-description">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div className="card">
                    <h3 className="card-title-date">2017 - 2019</h3>
                    <h2 className="card-title">University studies</h2>
                    <h2 className="card-sub-title">M'Hamed Bougara University of Boumerdés</h2>
                    <p className="card-description">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div className="card">
                    <h3 className="card-title-date">2014 - 2017</h3>
                    <h2 className="card-title">bachelor's degree in secondary education</h2>
                    <h2 className="card-sub-title">High School Technicom Bouiri Boualem Isser</h2>
                    <p className="card-description">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
             </div>
             <div className="skills">
                <h2 className="skills-head">My Skills</h2>
                <div className="skills-content">
                  <div className="skills-content-section">
                     <h3>web design <span className="porcentage">65%</span></h3>
                     <p className="webdesign"></p>
                  </div>
                  <div className="skills-content-section">
                     <h3>html/css <span className="porcentage">85%</span></h3>
                     <p className="htmlcss"></p>
                  </div>
                  <div className="skills-content-section">
                     <h3>bootstrap <span className="porcentage">70%</span></h3>
                     <p className="bootstrap"></p>
                  </div>
                  <div className="skills-content-section">
                     <h3>javascript <span className="porcentage">65%</span></h3>
                     <p className="javascript"></p>
                  </div>
                  <div className="skills-content-section">
                     <h3>react js <span className="porcentage">65%</span></h3>
                     <p className="reactjs"></p>
                  </div>
                </div>
             </div>
          </div>
          <div className="btn">
            <button>Download CV <FontAwesomeIcon icon={faDownload} className="icon"/></button>
          </div>
       </div>
		)
}

export default Summary;