import React from "react";
import HomeSlider from "./HomeSlider";
import './HomeSlider.css';
import HomeExtraBox from "./HomeExtraBox";
import './HomeExtraBox.css';
import HomeCourses from "./HomeCourses";
import './HomeCourses.css';

function Home() {
    return (
        <div>
            {/* <p>Hi Adesh Singh</p> */}
            <HomeSlider/>
            <HomeExtraBox/>
            <HomeCourses/>

        </div>
    )
        
}

export default Home