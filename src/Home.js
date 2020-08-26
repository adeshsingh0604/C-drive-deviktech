import React from "react";
import "./home.css";
// import P1 from "../src/images/desert.png";
// import P2 from "../src/images/Sliders (2).jpg";
import Video from "../src/images/My Video.mp4";
import { Spring } from 'react-spring/renderprops'
import Component1 from "./Components/component1.js";
import Component2 from "./Components/component2.js";
import Component3 from "./Components/component3.js";
import Stars from "./particle";
// import Component4 from "./Components/component4.js";



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

class Home extends React.Component {

    state = {
        Adesh: true,
    }

    call1 = () => {
        this.setState({ Adesh: this.state.false })
    }

    render() {
        const x = this.state.Adesh
        if (x)
            return (
                <div className="image">
                    <button className="buttonas" onClick={this.call1}>Enter</button>
                </div>
            )
        else
            return (
                <Spring
                    from={{ opacity: 0, marginTop: -1000 }}
                    to={{ opacity: 1, marginTop: 0 }}
                    config={{ duration: 5000 }}
                >
                    {props => (
                        <div >
                            <div className="video">
                                <video autoPlay  src={Video} height="50%" width="50%"></video>
                            </div>
                            <div >
                                <div className="App1" style={App1}>
                                    {/* <img src={Cloud} height="100%" width="100%" /> */}
                                    <Component1 />
                                    <Component2 />

                                </div>
                                <Component3 />
                                {/* <Component4 /> */}
                                {/* <Stars /> */}
                            </div>




                        </div>
                    )}
                </Spring>

            )
    }
}



export default Home