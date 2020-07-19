import React from "react";
import footerlogo from "./images/devikTech.Logo.png"


function Footer() {
     return (
          <div className="mainfooter">
               {/* footerWhyUs Seaction */}
               <div className="footerwhydiv">

                    {/* footer Image */}

                    <div className="footerlogodiv">
                         <img alt="DevkiTech" src={footerlogo} width="400px" height="200px" />
                    </div>

                    {/* footer WhatElseToKnow para Seaction */}

                    <div className="footerwhatparadiv">

                         <div className="whatheadingdiv">
                              <h1>What Else To Know</h1>
                         </div>
                         <div className="whatparadiv">
                              <p>We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.</p>
                              <p>Contact us 9117018454 or 9718365756</p>
                         </div>

                    </div>
               </div>

               {/* footerlinks Seaction */}

               <div className="linksfooterdiv">
                    <div className="footercourseslinks">
                         <div className="footercourses1">
                              <h3>Courses</h3>
                              <li><a href="#index">C++</a></li>
                              <li><a href="#index">Python</a></li>
                              <li><a href="#index">Core Java</a></li>
                              <li><a href="#index">MERN Stack</a></li>
                              <li><a href="#index">DSA</a></li>
                         </div>
                    </div>
                    <div className="footerk12courseslinks">
                         <div className="footerk12courses1">
                              <h3>K-12 Courses</h3>
                              <li><a href="#index">MIT APP</a></li>
                              <li><a href="#index">Scratch</a></li>
                              <li><a href="#index">Python</a></li>
                              <li><a href="#index">Game Development</a></li>
                              <li><a href="#index">Frontend Development</a></li>
                         </div>
                    </div>
                    <div className="footerworklinks1">
                         <h3>Work with Us</h3>
                         <li><a href="#index">Instructor</a></li>
                         <li><a href="#index">Marketing</a></li>
                         <li><a href="#index">Content Development</a></li>
                         <li><a href="#index">Intership</a></li>
                         <li><a href="#index">Web Developer</a></li>
                    </div>
                    <div className="footerimage1">
                         <img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/footerImage.png")} width="170px" height="170px" />
                    </div>
               </div>






               <div className="footersocialdiv">
                    <div className="socialseactiondiv">
                         <h3><p>Copyright © 2020 All rights reserved | <a className="footer-link" href="index.html">DevikTech</a></p></h3>
                    </div>
                    <div className="copyrightdiv">
                         <div className="socialmedia">
                              <a href="index.html"><img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/facebook.png")} width="40px" height="40px" /></a>
                         </div>

                         <div className="socialmedia">
                              <a href="index.html"><img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/instagram.png")} width="40px" height="40px" /></a>
                         </div>

                         <div className="socialmedia">
                              <a href="index.html"><img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/linkdin.png")} width="40px" height="40px" /></a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Footer