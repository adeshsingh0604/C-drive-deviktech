import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function HomeSlider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="Slider">
                        <div className="sliderheading">
                            <h1>First slide label</h1>
                            <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                            <button>Book A Class</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="Slider2">
                        <div className="sliderheading">
                            <h1>2 slide label</h1>
                            <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                            <button>Book A Class</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="Slider3">
                        <div className="sliderheading">
                            <h1>3 slide label</h1>
                            <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                            <button>Book A Class</button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            
        </div>
    )

}

export default HomeSlider