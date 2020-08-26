import React from "react";
import { Spring } from 'react-spring/renderprops'
// import Cloud from './cloud2.jpg'
import Cloud from '../Components/cloud7.png'

export default function Component4() {
  return (
    <Spring
      from={{ opacity: 1, marginTop: -4000 }}
      to={{ opacity: 0, marginLeft: 0, marginTop: 0 }}
      config={{ delay: 12000, duration: 10000 }}
    >
      {props => (
        <div style={props}>
          <div style={c4Style}>
          <img src={Cloud} height="100%" width="100%" />
          </div>
        </div>
      )}
    </Spring>

  );
}

const c4Style = {
//   border:"2px solid red",
//   backgroundImage: `url(${Cloud})`,
  width:"100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
};