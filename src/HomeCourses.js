import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function HomeCourses() {
    return (
        <div className="coursessection">
            <Carousel>
                <Carousel.Item>
                    <div className="Slider1">
                        <div className="sliderheading1">
                            <div className="coursescard">
                                <h1>C++</h1>
                                <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                                <button>Book A Class</button>
                            </div>
                            <div className="coursescard">
                                <h1>Java</h1>
                                <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                                <button>Book A Class</button>
                            </div>
                            <div className="coursescard">
                                <h1>Python</h1>
                                <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                                <button>Book A Class</button>
                            </div>
                            
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
            <button>Book A Class</button>

        </div>
    )

}

export default HomeCourses