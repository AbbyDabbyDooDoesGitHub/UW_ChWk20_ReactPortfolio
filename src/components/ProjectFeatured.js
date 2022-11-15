import React from 'react';
// import { Link } from 'react-router-dom';


const ProjectFeatured = ({projects}) => {

  {/*iterate through each project */}
  {projects.map((projects) => {

      if (projects.featured === true) {

        return (
          <>
            <a id="featured_standard" href={projects.repoLink} target="_blank" rel="noreferrer">
              <work_ex_card_feat class="featured_work">
                  <img class="featured_work content_images" src={projects.imgs.stdFeatured} alt={projects.imgs.alt}/>
                  <h4>{projects.title}
                      <br/>
                      <p>{projects.subtitle}</p>
                  </h4>
              </work_ex_card_feat>
            </a>
      
            <a id="featured_mobile" href={projects.repoLink} target="_blank" rel="noreferrer">
              <work_ex_card_feat class="featured_work">
                  <img class="featured_work content_images" src={projects.imgs.mobileFeatOrStd} alt={projects.imgs.alt}/>
                  <h4>{projects.title}
                      <br/>
                      <p>{projects.subtitle}</p>
                  </h4>
              </work_ex_card_feat>
            </a>
          </>
        );

      } else {

        return null;

      }
  })}

}

export default ProjectFeatured;