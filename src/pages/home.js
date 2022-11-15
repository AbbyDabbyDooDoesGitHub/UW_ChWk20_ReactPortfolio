import React from 'react';

import ProjectFeatured from './components/ProjectFeatured';
import Project from './components/Project';

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
        
                        <a id="featured_standard" href="https://github.com/AbbyDabbyDooDoesGitHub/quote-me-senpai" target="_blank">
                            <work_ex_card_feat class="featured_work">
                                <img class="featured_work content_images" src="./assets/imgs/_project-imgs/QMS_screenshot_STDFeat.png" alt="Light Purple Rounded Swirl"/>
                                <h4>Quote Me, Senpai!
                                    <br/>
                                    <p>Anime Quote Quiz, API Usage, Materialize Framework</p>
                                </h4>
                            </work_ex_card_feat>
                        </a>
                        
                        <a id="featured_mobile" href="https://github.com/AbbyDabbyDooDoesGitHub/quote-me-senpai" target="_blank">
                            <work_ex_card_feat class="featured_work">
                                <img class="featured_work content_images" src="./assets/imgs/_project-imgs/QMS_screenshot.png" alt="Preview of the 'Quote Me, Senpai' Web Application"/>
                                <h4>Quote Me, Senpai!
                                    <br/>
                                    <p>Anime Quote Quiz, API Usage, Materialize Framework</p>
                                </h4>
                            </work_ex_card_feat>
                        </a>

                    <content_image_cards>
                        
                        <a href="https://github.com/AbbyDabbyDooDoesGitHub/UW_ChWk03_PasswordGenerator" target="_blank">
                            <work_ex_card>
                                <img class="content_images" src="./assets/imgs/_project-imgs/PasswordGen_Screenshot.png" alt="Preview of the Password Generator Web Application"/>
                                <h4>Password Generator
                                    <br/>
                                    <p>User Input, Alert/Confirm Windows, & Random Characters</p>
                                </h4>
                            </work_ex_card>  
                        </a>   

                        <a href="https://github.com/AbbyDabbyDooDoesGitHub/UW_ChWk01_WebAccessibilityFeatures" target="_blank">
                            <work_ex_card>
                                <img class="content_images" src="./assets/imgs/_project-imgs/Accessibility_Screenshot.PNG" alt="Preview of the Page Worked on for Accessibility Features (A Fake Company Landing Page)"/>
                                <h4>Web Accessibility Features
                                    <br/>
                                    <p>Add Accessibility Features, Adjust Layout, & Ensure Proper Functionality</p>
                                </h4>
                            </work_ex_card>  
                        </a>
                        

                        <a href="https://github.com/AbbyDabbyDooDoesGitHub/UW_Project3_LeagueOfLegendsFriendTracker" target="_blank">
                            <work_ex_card>
                                <img class="content_images" src="./assets/imgs/_generic-imgs/Light_Purple_Rounded_Blob_Swirl.jpg" alt="Light Purple Rounded Swirl"/>
                                <h4>Hawkshot
                                    <br/>
                                    <p>Gaming Friend Tracker</p>
                                </h4>
                            </work_ex_card>   
                        </a>             
        
                        <work_ex_card>
                            <img class="content_images" src="./assets/imgs/_generic-imgs/Light_Pink_Tan_Unfocused_Lights.jpg" alt="Light Pink Unfocused Lights"/>
                            <h4>Placeholder
                                <br/>
                                <p>Subtitle</p>
                            </h4>
                        </work_ex_card>    
                        
                        <work_ex_card>
                            <img class="content_images" src="./assets/imgs/_generic-imgs/Grey_Abstract_Building.jpg" alt="Grey Abstract Building"/>
                            <h4>Placeholder
                                <br/>
                                <p>Subtitle</p>
                            </h4>
                        </work_ex_card>    
        
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
