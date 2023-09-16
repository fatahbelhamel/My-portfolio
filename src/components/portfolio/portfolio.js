import Project from "../../data/project.js";
import dataList from "../../data/data.js";


const Portfolio = ()=> {
   
	return (
       <div className="portfolio container" id="portfolio">
       	 <h1 className="back-title">portfolio</h1>
          <h1 className="title-head">My Work</h1>
          <div className="projects">
            {
               dataList.map((data)=>
                  <Project id={data.id} name={data.project_name} description={data.project_description} image={data.project_image} />
               )
            }
            
          </div>
       </div>
		)
}

export default Portfolio;