import React, {Component} from "react";
import {Spring} from 'react-spring/renderprops'
import Cloud from '../Components/cloud2.png'


export class Component1 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginLeft: -1000,marginTop: -2000 }}
        to={{ opacity: 1, marginLeft:0, marginTop: 0}}
        config={{delay:2000, duration: 7000 }}
      >
        {props => (
          <div style={props}>
            <div style={c1Style}>
              <img src={Cloud} height="100%" width="100%" />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}


  

const c1Style = {
  // background: "#2d2d2d",
  // color: "black",
  // border:"2px solid red",
  // width:"100vh",
  // height:"100vh"
  
};

export default Component1;
