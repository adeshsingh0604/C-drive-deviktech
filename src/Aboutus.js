import React from "react";
import Aboutimage from "./images/aboutimage.jpg"
import About from "./images/About.png"
import founderimage from "./images/unnamed.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuperpowers, faAngellist, faBlackTie, faCodepen } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import HomeSwiper from "./HomeSwiper";
import './HomeSwiper.css';
// import Carousel from 'react-bootstrap/Carousel'



const AboutArea = styled("div")`
// color: black;
// color: #666674;
font-family: 'Nunito', sans-serif;
`

const Aboutimagearea = styled("div")`
background-image: url(${About});
background-size: cover;
height: 50vh;

@media screen and (max-width:1150px){
    height: auto;
}
`

const AboutimageareaPara = styled("p")`
padding: 10%;
font-size: 50px;
// border: 2px solid black;
color: #cfd9e0;
font-family: Arial, Helvetica, sans-serif;  
font-weight: bolder;

@media screen and (max-width:1150px){
    padding: auto;
    margin: auto;
}
`


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

@media screen and (max-width:1150px){
    // height: auto;
    // border: 2px solid crimson;
    margin: auto;
    font-size: xx-large;
    padding: 1%;
}
`

const Applybutton = styled("button")`
font-size: large;
transition-duration: 0.3s;
cursor: pointer;
background-color: #0F4065; 
color:#ffffff;
border: 2px solid #0F4065;  
border-radius: 10px;
font-family: 'Nunito', sans-serif;
padding: 1%;
margin: auto;
`
const Textarea = styled("div")`
display: flex;
flex-direction: row;
justify-content: center;
// border: 2px solid forestgreen; 
background-color: #08192B;
// padding: 1%; 
color: #cfd9e0;

@media screen and (max-width:1150px){
    // border: 2px solid forestgreen;
    flex-direction: column;
}

`

const Aboutpara = styled("div")`
text-align: right;
// border: 2px solid crimson;
width: 50%;
// margin:2%;
padding: 2%;

@media screen and (max-width:1150px){
    // border: 2px solid green;
    width: 100%;
    text-align: center;
    padding: auto;
}

`

const Mission = styled("div")`
text-align: left;
// border: 2px solid crimson;
width: 50%;
padding: 2%;

@media screen and (max-width:1150px){
    // border: 2px solid red;
    width: 100%;
    text-align: center;
    padding: auto;
}
`

const AboutGirlImage = styled("div")`
width: 50%;
// border: 2px solid chartreuse;
padding: 1%;

@media screen and (max-width:1150px){
    // height: auto;
    width: 100%;
}

`

const AboutGirlImageimg = styled("div")`
// width: 750px; 
height: 70vh;
// border: 2px solid red;
background-image: url(${Aboutimage});
background-size: cover;
background-position: center;
`

const AboutDevikTech = styled("div")`
width: 50%;
// border: 2px solid firebrick;
padding: 1%;
text-align: left;
color: #0E2A47;

@media screen and (max-width:1150px){
    width: 100%;
    // border: 2px solid firebrick;
    padding: auto;
    text-align: center;
}

`



const Aboutbuttondiv = styled("div")`
padding: 1%;
// border: 2px solid black;
display: flex;
flex-direction: row;
justify-content: center;

@media screen and (max-width:1150px){
    flex-direction: column;
    // border: 2px solid black;
}

`

const MainAboutfounder = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-evenly;
height: 70vh;
background-color: #08192B;
// border: 2px solid gray;

@media screen and (max-width:1150px){
    flex-direction: column-reverse;
    height: auto;
}


`
const Aboutusfounderpara = styled("div")`
width: 50%;
// border: 2px solid #f00808;
padding: 25px;

@media screen and (max-width:1150px){
    width: 100%;
}

`

const Aboutusfounderimage = styled("div")`
display: flex;
flex-direction: column;
justify-content: center;
// border: 2px solid chartreuse;
width: 50%;
align-items: center;

@media screen and (max-width:1150px){
    width: 100%;
    display: none; 
}

`

// const Aboutusfounderimageimg = styled("img")`
// border: 2px solid red;
// border-radius: 50%;
// `



const Ah2 = styled("h1")`
margin: 1%;
text-align: right;
color: #cfd9e0;
// border: 2px solid blue;

@media screen and (max-width:1150px){
    text-align: center;
}

`

const Ah3 = styled("h3")`
margin: 1%;
color: #cfd9e0;
// border: 2px solid blue;
`

const Founderbutton = styled("button")`
font-size: large;
transition-duration: 0.3s;
cursor: pointer;
color: #30D3F6;
box-shadow: 0px 1px 0px 0px rgba(8, 142, 252, 0.459);
border: 2px solid #30D3F6;
background-color: #2d7fbe00;
border-radius: 10px;
font-family: 'Nunito', sans-serif;
padding: 1%;
margin: auto;
`

const Founderpara = styled("div")`
text-align: right;
color: #cfd9e0;
// border: 2px solid blue;

@media screen and (max-width:1150px){
    text-align: center;
}

`

const Aboutdescription = styled("div")`
display: flex;
flex-direction: column;
// border: 2px solid blue;
`

const Descriptionheading = styled("div")`
font-family: Arial, Helvetica, sans-serif;  
font-weight: bolder; 
text-align: center;
font-size: xx-large;
color: #0F4065;
// border: 2px solid crimson;
`

const Abouth = styled("div")`
display: flex;
flex-direction: row;
justify-content: space-around;
// border: 2px solid blue;
background-color: #08192B;

@media screen and (max-width:1150px){
    flex-direction: column;
}

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
            <Aboutimagearea>
                <AboutimageareaPara>About Us</AboutimageareaPara>
            </Aboutimagearea> 
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
                        <AboutGirlImage>
                            <AboutGirlImageimg>
                            {/* <img alt="DevkiTech" src={Aboutimage} /> */}
                            </AboutGirlImageimg>
                        </AboutGirlImage>
                        <AboutDevikTech>
                            <h1>About DevikTech</h1>
                            <p>we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.</p>
                            <p>we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.e have the example right now ,many government schools are struggling to conduct online classes.we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online.e have the example right now ,many government schools are struggling to conduct online classes.</p>
                            <Applybutton>Book A Demo</Applybutton>
                        </AboutDevikTech>

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
                        <Founderbutton>Know More</Founderbutton>
                    </Founderpara>

                </Aboutusfounderpara>
                <Aboutusfounderimage>
                    {/* <Aboutusfounderimageimg><img alt="DevkiTech" src={founderimage} width="450px" height="450px" /> */}
                    <img className="aboutusfounderimageimg" alt="DevkiTech" src={founderimage} width="450px" height="450px" /> 
                    {/* </Aboutusfounderimageimg> */}
                    <Ah3> CEO/Founder</Ah3>
                </Aboutusfounderimage>
            </MainAboutfounder>

            <Aboutdescription>
                <Descriptionheading>About Company Values</Descriptionheading>
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
            <HomeSwiper/>
        </AboutArea>
    )
}


export default Aboutus