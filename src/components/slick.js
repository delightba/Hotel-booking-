import React from "react";
import Slider from "react-slick";
import { TestimonialProp } from "./props";

function Fade() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" /></svg>
        </div>
      </div>
    ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <TestimonialProp
            paragraph=' repellendus, corporis tenetur reprehenderit quis aspernatur, cupiditate id. Id, esse dolorum ipsam reprehenderit nemo possimus amet voluptate.'
            name='Charlotte Hale'
            author='../images/charlotte.avif'
            authoralt='author'
            occupation='CEO, Delos Inc.'
            img='../images/jet.png'
          />
        </div>
        <div>
          <TestimonialProp
            paragraph='eaque quo veritatis, repellendus deleniti, vel ex id libero fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nam dolorem cum laborum,'
            name='Adam Cuppy'
            author='../images/Adam.avif'
            authoralt='author'
            occupation='Founder, Events NYC.'
            img='../images/waterfall.png'
          />
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
