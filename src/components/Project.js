import React from 'react';
// import { Link } from 'react-router-dom';

const Project = ({projects}) => {

    {/*iterate through each project */}
    {projects.map((projects) => {

        if (projects.featured === true) {

            return null;

        } else {

            return (
                <>
                    <a href={projects.repoLink} target="_blank" rel="noreferrer">
                        <work_ex_card>
                            <img class="content_images" src={projects.imgs.mobileFeatOrStd} alt={projects.imgs.alt}/>
                            <h4>
                                {projects.title}
                                <br/>
                                <p>{projects.subtitle}</p>
                            </h4>
                        </work_ex_card>  
                    </a>  
                </>
            );

        }
    })}

}

export default Project;
