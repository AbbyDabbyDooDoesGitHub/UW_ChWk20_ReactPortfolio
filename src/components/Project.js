import React from 'react';
// import { Link } from 'react-router-dom';

const Project = ({projectSeeds}) => {

    {projectSeeds.map((projectSeeds) => {

        // if (projectSeeds.featured === true) {

        //     return null;

        // } else {

            return (
                // <>
                    <a href={projectSeeds.repoLink} target="_blank" rel="noreferrer">
                        <work_ex_card>
                            <img class="content_images" src={projectSeeds.imgs.mobileFeatOrStd} alt={projectSeeds.imgs.alt}/>
                            <h4>
                                {projectSeeds.title}
                                <br/>
                                <p>{projectSeeds.subtitle}</p>
                            </h4>
                        </work_ex_card>  
                    </a>  
                // </>
            );

        // }
    })}

}

export default Project;
