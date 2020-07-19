import React from "react";
import burger_menu from "./images/burger_menu.png"

function Header() {
    return (
        <div className="mainheader">
            <div className="headerelements">
                <div className="menulogo">
                    {/* <a href="https://www.devikTech.com"><img alt="DevkiTech" src={require("C:/Users/Hp/first-app-sample/src/images/devikTech.Logo.png")}/></a> */}
                </div>
                <div id="menuelements" className="menu_list">
                    <li><a href="Courses.js">Courses</a></li>
                    {/* <li><a href="https://www.devikTech.com">Why Us</a></li> */}
                    {/* <li><a href="https://www.devikTech.com">Reviews</a></li> */}
                    {/* <li><a href="https://www.devikTech.com">Contact Us</a></li> */}
                    <li><a href="Aboutus.js">About Us</a></li>
                    <li><a href="https://www.devikTech.com">Internship</a></li>
                </div>
            </div>
            <div className="headerbutton">
                <button className="applybuttonheader">Enroll Now</button>
            </div>
            <a href="Aboutus.js" id="iconbar" onClick="responsive_menu()">
                    <img src={burger_menu} alt="menu-icon"/>
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