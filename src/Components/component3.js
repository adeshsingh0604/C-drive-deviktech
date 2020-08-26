import React from "react";
import { Spring } from 'react-spring/renderprops'
// import Cloud from './cloud2.jpg'
import Cloud from '../Components/cloud7.png'
import Cloud1 from '../Components/cloud9.png'
import Cloud2 from '../Components/cloud10.png'

export default function Component3() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -4000 }}
      to={{ opacity: 1, marginLeft: 0, marginTop: 0 }}
      config={{ delay: 10000, duration: 10000 }}
    >
      {props => (
        <div style={props}>
          <div style={c3Style}>
          <img src={Cloud1} height="100%" width="100%" />
          <img src={Cloud1} height="100%" width="100%" />
          <img src={Cloud2} height="100%" width="100%" />
          <img src={Cloud} height="100%" width="100%" />
          </div>
        </div>
      )}
    </Spring>

  );
}

const c3Style = {
  // border:"2px solid red",
  // backgroundImage: `url(${Cloud})`,
  width:"100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
};