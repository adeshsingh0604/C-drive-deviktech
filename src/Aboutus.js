import React from "react";
import Aboutimage from "./images/aboutimage.jpg"
import About from "./images/About.png"
import founderimage from "./images/unnamed.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuperpowers, faAngellist, faBlackTie, faCodepen } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'



const AboutArea = styled("div")`
// color: black;
// color: #666674;
font-family: 'Nunito', sans-serif;
`

// const Aboutimagearea = styled("div")`
// background-image: url(${'About'});
// height: 50vh;
// `


const MainAboutarea = styled("div")`
    // border: 2px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media screen and (max-width:1150px){
        flex-direction: column;
        height: auto;
    }


`

const Aboutuspara = styled("div")`
// border: 2px solid crimson;
// margin: 5%;
// padding: 2%;
color: #08192B;
`

const Ah1 = styled("h1")`
font-family: Arial, Helvetica, sans-serif;  
font-weight: bolder;
text-align: center;
// border: 2px solid crimson;
font-size: xx-large;
color: #0F4065;
margin: 1%;
`
const Textarea = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
// border: 2px solid forestgreen; 
background-color: #08192B;
// padding: 1%; 
color: #cfd9e0;
`

const Aboutpara = styled("div")`
text-align: right;
// border: 2px solid crimson;
width: 50%;
// margin:2%;
padding: 2%;
`

const Mission = styled("div")`
text-align: left;
// border: 2px solid crimson;
width: 50%;
padding: 2%;
`

const Aboutbuttondiv = styled("div")`
padding: 1%;
// border: 2px solid black;
display: flex;
    flex-direction: row;
    justify-content: center;
`

const MainAboutfounder = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-evenly;
height: 70vh;
background-color: #08192B;
// border: 2px solid gray;
`
const Aboutusfounderpara = styled("div")`
width: 50%;
// border: 2px solid #f00808;
padding: 25px;
`

const Ah2 = styled("h1")`
margin: 1%;
text-align: right;
color: #cfd9e0;
// border: 2px solid blue;
`

const Ah3 = styled("h3")`
margin: 1%;
color: #cfd9e0;
// border: 2px solid blue;
`

const Founderpara = styled("div")`
text-align: right;
color: #cfd9e0;
// border: 2px solid blue;
`

const Aboutdescription = styled("div")`
display: flex;
flex-direction: column;
// border: 2px solid blue;
`

const Abouth = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-around;
// border: 2px solid blue;
background-color: #08192B;
`

const Card1 = styled("div")`
border-radius: 10px;
display: flex;
flex-direction: column;
background-color: #ffffff;
border: 2px solid rgba(25, 131, 231, 0.947);
box-shadow: 10px 10px 10px 0px rgba(74, 129, 151, 0.556);
cursor: pointer;
align-items: center;
margin: 2%;
padding: 2%;
// border: 2px solid blue;
`


function Aboutus() {
    return (
        <AboutArea>
            <div className="Aboutimagearea">
                <p>About Us</p>
            </div>
            {/* <Aboutimagearea>
                <p>About Us</p>
            </Aboutimagearea> */}
            <MainAboutarea>
                <Aboutuspara>
                    <Ah1>Welcome to DevikTECH</Ah1>
                    <Textarea>
                        <Aboutpara>
                            <h4>Our Mission</h4>
                            <p>And we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.</p>
                            <h4>Our Essence</h4>
                            <p>And we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.</p>
                        </Aboutpara>
                        <Mission>
                            <h4>Our Vision</h4>
                            <p>And we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.</p>
                            <h4>Our Promise</h4>
                            <p>And we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.</p>
                        </Mission>
                    </Textarea>
                    <Aboutbuttondiv>
                        <div className="adesh">
                            <img alt="DevkiTech" src={Aboutimage} width="650px" height="450px" />
                        </div>
                        <div className="adesh1">
                            <h1>About DevikTech</h1>
                            <p>we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.</p>
                            <p>we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.e have the example right now ,many government schools are struggling to conduct online classes.</p>
                            <button className="Applybutton">Book A Demo</button>
                        </div>

                    </Aboutbuttondiv>
                </Aboutuspara>
            </MainAboutarea>


            <MainAboutfounder>
                <Aboutusfounderpara>
                    <Ah2> About Founder </Ah2>
                    <Founderpara>
                        <p>DevikTech is founded by <a href="https://www.devikTech.com">Vikash Dubey</a>
                                , best teacher and amazing personality.Vikash is a Bachelor of Technology in Computer Science from Sharda University, Greater Noida, NCR, Uttar Pradesh. He has been interested to imparting knowledge to everyone around him since quite young age. It started with teaching his own brother in school, then it expanded to the tuition of neighbouring kids for helping them completing their homework.  It took a serious turn when he started taking classes for high school students in NOIDA during his Engineering Days. Finally after graduation he worked in an International Edutech firm. He found certain gaps in the knowledge being imparted to students and the skills required for students. To bridge that gap he started his own venture DEVIKTECH EDUCATION LLP which got incorporated in JUNE 2020.</p>
                        <p>He has a simple philosophy “ getting the students ready for contributing in the process of making INDIA a global engineering power. We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future. We conduct tests for different students based on their class and try to mentor and the best performers to participate in national and international coding competitions.</p>
                        <button className="founderbutton">Know More</button>
                    </Founderpara>

                </Aboutusfounderpara>
                <div className="aboutusfounderimage">
                    <img alt="DevkiTech" src={founderimage} width="450px" height="450px" />
                    <Ah3> CEO/Founder</Ah3>
                </div>
            </MainAboutfounder>

            <Aboutdescription>
                <div className="descriptionheading">
                    About Company Values
                </div>
                <Abouth>
                    <Card1>
                        <FontAwesomeIcon icon={faCodepen} size="5x" color="#0F4065" /><br />
                        <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                    </Card1>
                    <Card1>
                        <FontAwesomeIcon icon={faBlackTie} size="5x" color="#0F4065" /><br />
                        <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                    </Card1>
                    <Card1>
                        <FontAwesomeIcon icon={faSuperpowers} size="5x" color="#0F4065" /><br />
                        <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                    </Card1>
                    <Card1>
                        <FontAwesomeIcon icon={faAngellist} size="5x" color="#0F4065" /><br />
                        <p>We train students in coding in various programming languages so that they become more and more involved in the technologies being developed and thus get ready for the technologies of future</p>
                    </Card1>
                </Abouth>
            </Aboutdescription>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={About} width="650px" height="450px"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={About} width="650px" height="450px"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={About} width="650px" height="450px"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </AboutArea>
    )
}


export default Aboutus