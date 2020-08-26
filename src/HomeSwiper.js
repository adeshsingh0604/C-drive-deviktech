import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css'

  const HomeSwiper = () => {
    const HorizontalSwiperParams = {
      pagination: {
        el: '.swiper-pagination.swiper-pagination-h',
        clickable: true
      }
    };
    const VerticalSwiperParams = {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination.swiper-pagination-v',
        clickable: true
      }
    };
    return (
      <Swiper {...HorizontalSwiperParams}>
        <div className="S">
            <p>Adesh Singh</p>
        </div>
        <div>Horizontal #2</div>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div>Vertical #1</div>
            <div>Vertical #2</div>
            <div>Vertical #3</div>
            <div>Vertical #4</div>
          </Swiper>
        </div>
        <div>Horizontal #4</div>
        <div>Horizontal #5</div>
      </Swiper>
    );
  };
  export default HomeSwiper;