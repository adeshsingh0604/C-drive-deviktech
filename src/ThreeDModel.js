import React from "react";
// import { Transition } from "react-spring";
// import {Transition, animated} from 'react-spring/renderprops'
import Component1 from "./Components/component1.js";
import Component2 from "./Components/component2.js";
import Component4 from "./Components/component4.js";
import Cloud from '../src/Components/cloud.jpg'
import { Spring } from 'react-spring/renderprops'
import Video from "../src/images/My Video.mp4";



const App1 = {
    display: "flex",
    flexDirection: "row",
    // backgroundImage: `url(${Cloud})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "100vh",
    // border: "2px solid red",
    // backgroundcolor:"blue"
};

function ThreeDModel() {
    return (

        <Spring
            from={{ opacity: 0, marginTop: -1000 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{duration: 5000 }}
        >
            {props => (
                <div >
                    <div className="video">
                        <video autoPlay loop src={Video} height="50%" width="50%"></video>
                    </div>
                    <div >
                    <div className="App1" style={App1}>
                        {/* <img src={Cloud} height="100%" width="100%" /> */}
                        <Component1 />
                        <Component2 />
                    </div>
                    </div>
                    
                    

                </div>
            )}
        </Spring>



    )
}

export default ThreeDModel;

