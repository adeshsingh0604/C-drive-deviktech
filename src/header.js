import React from "react";
import burger_menu from "./images/burger_menu.png"
// import headerlogo from "./images/devikTech.Logo.png"
import footerLogoWhite from "./images/Logo.White.png"
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div className="mainheader">
            <div className="headerelements">
                <div className="menulogo">
                    <NavLink className="linksheader" to="/"><img alt="DevkiTech" src={footerLogoWhite} /></NavLink>
                </div>
                <div id="menuelements" className="menu_list">
                    <NavLink className="linksheader" to="/Courses">Courses</NavLink>
                    <NavLink className="linksheader" to="/Aboutus">About Us</NavLink>
                    <NavLink className="linksheader" to="/Internship">Internship</NavLink>
                    <NavLink className="linksheader" to="/Home">Sliders</NavLink>
                </div>
            </div>
            <div className="headerbutton">
                <button className="applybuttonheader">Enroll Now</button>
            </div>
            <a href="Aboutus.js" id="iconbar" onClick="responsive_menu()">
                <img src={burger_menu} alt="menu-icon" />
            </a>


        </div>
    )
}

// function responsive_menu(){
//     var e = document.getElementsByClassName('menuelements')
//     if (e.className === 'menu_list'){
//         e.className += "responsive";
//     }else{
//         e.className = 'menu_list';
//     }
// }








// class Header extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {home: "Home",
//         about:"About",
//         contact:"Contact",
//         courses:"Courses"
//     };
//     }
//     changename=()=>{this.setState({home:"HOME"})}
//     changename2=()=>{this.setState({about:"ABOUT"})}
//     changename3=()=>{this.setState({contact:"CONTACT"})}
//     changename4=()=>{this.setState({courses:"COURSES"})}

//     render(){
//     return (
//         <div className="menu">
//             <div>
//                 <h2 type="button" onClick={this.changename}>{this.state.home}</h2>
//             </div>
//             <div>
//                 <h2 type="button" onClick={this.changename2}>{this.state.about}</h2>
//             </div>
//             <div>
//                 <h2 type="button" onClick={this.changename3}>{this.state.contact}</h2>
//             </div>
//             <div>
//                 <h2 type="button" onClick={this.changename4}>{this.state.courses}</h2>
//             </div>




//         </div>

//         )
//     }
// }

export default Header