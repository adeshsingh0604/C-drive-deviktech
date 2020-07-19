import React from "react";
import aboutimage from "./images/aboutimage.jpg"
import founderimage from "./images/unnamed.png"
import aboutcompanyicon1 from "./images/aboutcompanyicon1.png"
import aboutcompanyicon2 from "./images/aboutcompanyicon2.png"
import aboutcompanyicon3 from "./images/aboutcompanyicon3.png"
import aboutcompanyicon4 from "./images/aboutcompanyicon4.png"
// import Button from 'react-bootstrap/Button'; 
// import { Button } from 'react-bootstrap'
import styled from 'styled-components';


const AboutArea = styled("div")`
color: #666674;
font-family: 'Nunito', sans-serif;
`


function Aboutus() {
        return (
            <AboutArea>
                <div className="mainAboutarea">
                    <div className="aboutusimage">
                        <img src={aboutimage} alt="i" />
                    </div>
                    <div className="aboutuspara">
                        <h1 className="ah1">DevikTech Is Creating World Class Programmers By Making Code Fun And Easy.</h1>
                        <div className="aboutpara">
                            <p> DevikTech trains students to develop their skills in Coding. These students in turn participate in different competitions around the country and globe and  the very participation creates a sense of winning among many students. Some students go on to win these competitions and thus bring laurels to the school. Thus the school not only becomes a better place to learn, but is also ahead of other schools who are not implementing something like this.
                            Besides these the quality of skills among teachers also improves and they become more and more involved with technology.
                    </p>
                            <p>And we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.

                    </p>
                            <button className="applybutton">Book A Demo</button>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="mainAboutfounder">

                        <div className="aboutusfounderpara">
                            <h1 className="ah2"> About Founder </h1>
                            <div className="founderpara">
                                <p>DevikTech is founded by <a href="https://www.devikTech.com">Vikash Dubey</a>
                                , best teacher and amazing personality.Vikash is a Bachelor of Technology in Computer Science from Sharda University, Greater Noida, NCR, Uttar Pradesh. He has been interested to imparting knowledge to everyone around him since quite young age. It started with teaching his own brother in school, then it expanded to the tuition of neighbouring kids for helping them completing their homework.  It took a serious turn when he started taking classes for high school students in NOIDA during his Engineering Days. Finally after graduation he worked in an International Edutech firm. He found certain gaps in the knowledge being imparted to students and the skills required for students. To bridge that gap he started his own venture DEVIKTECH EDUCATION LLP which got incorporated in JUNE 2020.</p>
                                <p>He has a simple philosophy “ getting the students ready for contributing in the process of making INDIA a global engineering power. We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future. We conduct tests for different students based on their class and try to mentor and the best performers to participate in national and international coding competitions.</p>
                                <button className="founderbutton">Know More</button>
                            </div>

                        </div>
                        <div className="aboutusfounderimage"><img alt="DevkiTech" src={founderimage} width="450px" height="450px" />
                            <h2 className="ah2"> CEO/Founder</h2>


                        </div>
                    </div>
                </div>
                <div className="aboutdescription">
                    <div className="aboutcompany">
                        <h1>Company intro</h1>
                    </div>
                    <div className="abouth">
                        <div className="card1">
                            <img alt="DevkiTech" src={aboutcompanyicon1} width="80px" height="80px" />
                            <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                        </div>
                        <div className="card1">
                            <img alt="DevkiTech" src={aboutcompanyicon2} width="80px" height="80px" />
                            <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                        </div>
                    </div>
                    <div className="abouth1">
                        <div className="card1">
                            <img alt="DevkiTech" src={aboutcompanyicon3} width="80px" height="80px" />
                            <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                        </div>
                        <div className="card1">
                            <img alt="DevkiTech" src={aboutcompanyicon4} width="80px" height="80px" />
                            <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                        </div>
                    </div>

                </div >
            </AboutArea>    
        )
}


export default Aboutus