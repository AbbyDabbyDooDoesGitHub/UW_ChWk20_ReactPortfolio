import React from 'react';
// import { Link } from 'react-router-dom';


const ProjectFeatured = ({projectSeeds}) => {

  {/*iterate through each project */}
  {projectSeeds.map((projectSeeds) => {

      if (projectSeeds.featured === true) {

        return (
          <>
            <a id="featured_standard" href={projectSeeds.repoLink} target="_blank" rel="noreferrer">
              <work_ex_card_feat class="featured_work">
                  <img class="featured_work content_images" src={projectSeeds.imgs.stdFeatured} alt={projectSeeds.imgs.alt}/>
                  <h4>{projectSeeds.title}
                      <br/>
                      <p>{projectSeeds.subtitle}</p>
                  </h4>
              </work_ex_card_feat>
            </a>
      
            <a id="featured_mobile" href={projectSeeds.repoLink} target="_blank" rel="noreferrer">
              <work_ex_card_feat class="featured_work">
                  <img class="featured_work content_images" src={projectSeeds.imgs.mobileFeatOrStd} alt={projectSeeds.imgs.alt}/>
                  <h4>{projectSeeds.title}
                      <br/>
                      <p>{projectSeeds.subtitle}</p>
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