import React from 'react';

import ProjectFeatured from './components/ProjectFeatured';
import Project from './components/Project';

// Import our list of users from users.js
import projectSeeds from './seeds/project-seeds';

export default function home() {
  return (
    <React.Fragment>

        <br/>

        <main>

            <div id="About_Me" class="section">
                <div>
                    <h3 class="content_heading">About Me</h3>
                </div>
        
                <div class="content" id="about_me_content">

                    <p id="intro_text">

                        <img id="intro_image" src="./assets/imgs/My_Profile_Pic.JPG" alt="A Picture of Abigail Douglas"/>

                        <br id="about_me_mobile_br"/>

                        I am currently working as the Inventory & Systems Manager at Wallaroo's Furniture & Mattresses. This position has provided a fantastic opportunity to improve their scalable systems, as it is a rapidly expanding business. In this job, I have found myself pulling on old coding courses from college and searches on Google to assist in providing useful systems for communication at my workplace. Due to realizing the utility of further coding fluencey in my current work and future ambitions, I decided to enroll in the coding bootcamp offered by the University of Washington to improve the quality of my code. I am currently working through this bootcamp, developing the foundations and skills needed to work in a coding environment.

                        <br/><br/>
                        
                        I am always interested in trying new things and expanding my horizons. I firmly believe that anything can be accomplished with the right attitude, planning, and commitment.

                    </p>
                </div>
        
            </div>
            
            <br/>

            <div id="Work" class="section">
                <div>
                    <h3 class="content_heading">Work</h3>
                </div>
        
                <div class="content">
        
                        <ProjectFeatured projects={projectSeeds} />

                    <content_image_cards>

                        <Project projects={projectSeeds} />
        
                    </content_image_cards>
        
                </div>
        
            </div>
            
            <br/>

            <div id="Contact_Me" class="section">
                <div>
                    <h3 class="content_heading">Contact Me</h3>
                </div>
        
                <div class="content">
                    <div id="Contact_Me_Content">
                        <ul class="Contact_Me_Content">
                            <li class="Contact_Me_Content"><a href="https://github.com/AbbyDabbyDooDoesGitHub" target="_blank">
                                <img class="contact_icons" src="./assets/imgs/_icons/logo_github_icon_143196.png" alt="GitHub Logo Icon"/>
                            </a></li>

                            <li class="Contact_Me_Content"><a href="https://www.linkedin.com/in/abigailcdouglas/" target="_blank">
                                <img class="contact_icons" src="./assets/imgs/_icons/logo_linkedin_icon_143191.png" alt="LinkedIn Logo Icon"/>
                            </a></li>

                            <li class="Contact_Me_Content"><a href="mailto: ItsAbigailDouglas@gmail.com">
                                <img class="contact_icons" src="./assets/imgs/_icons/logo_gmail_envelope_letter_email_icon_143171.png" alt="Gmail Logo Icon"/>
                            </a></li>

                        </ul>
                    </div>
                </div>
        
            </div>

        </main>

        <br/>
        <br/>


    </React.Fragment>
  )
}
