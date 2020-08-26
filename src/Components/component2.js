import React, { Component } from "react";
import {Spring} from 'react-spring/renderprops'
import Cloud from '../Components/cloud8.png'


export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginRight: -1000, marginTop: -2000 }}
        to={{ opacity: 1, marginRight:0, marginTop: 0}}
        config={{ delay:2000 ,duration: 7000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <img src={Cloud} height="100%" width="100%" />
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  // background: "slateblue",
  // width:"100%",
  // border:"2px solid red",
  // height:"100vh"
};

export default Component2;