import React from "react";
import Slider from "react-slick";
// import { baseUrl } from "./config";
import { TestimonialProp } from "./props";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

function Fade() {
//   const settings = {
//     dots: true,
//     fade: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     waitForAnimate: false
//   };
  return (
    // <div className="slider-container">
    //   <Slider {...settings}>
    //     <div>
    //         <div className="row">
    //             <div className="col-sm-6 col-md-6 col-lg-7 mt-auto">
    //                 <p className="fs-4"><i className="color"><RiDoubleQuotesL/></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore<i className="color"><RiDoubleQuotesR/></i></p>
    //                 <div className="d-flex">
    //                     <img className="rounded-circle testimonial-img" src='../images/charlotte.avif' alt='charlotte hale' />
    //                     <div>
    //                         <h2 className="color">Charlotte Hale</h2>
    //                         <p>CEO, Delos Inc.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-sm-6 col-md-6 col-lg-5">
    //                 <img className="test-height rounded" src='../images/jet.png' alt='write up image' />
    //             </div>
    //         </div>
    //     </div>
    //     <div>
    //         <div className="row">
    //             <div className="col-sm-6 col-md-6 col-lg-7 mt-auto">
    //                 <p className="fs-4"><i className="color"><RiDoubleQuotesL/></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore<i className="color"><RiDoubleQuotesR/></i></p>
    //                 <div className="d-flex">
    //                     <img className="rounded-circle testimonial-img" src='../images/charlotte.avif' alt='charlotte hale' />
    //                     <div>
    //                         <h2 className="color">Charlotte Hale</h2>
    //                         <p>CEO, Delos Inc.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-sm-6 col-md-6 col-lg-5">
    //                 <img className="test-height rounded" src='../images/jet.png' alt='write up image' />
    //             </div>
    //         </div>
    //     </div>
    //   </Slider>
    // </div>
    <div className="js-slick-carousel u-slick"
     data-infinite="true">
  <div className="js-slide bg-img-hero-center" style={{backgroundImage:'url(../images/umbrella.png)'}}>
    <div className="space-5">
    </div>
  </div>
  <div className="js-slide bg-img-hero-center" style={{backgroundImage: 'url(../images/umbrella.png)'}}>
    <div className="space-5">
    </div>
  </div>
  <div className="js-slide bg-img-hero-center" style={{backgroundImage: 'url(../images/umbrella.png)'}}>
    <div className="space-5">
    </div>
  </div>
</div>

  );
}

export default Fade;
<div class="js-slick-carousel u-slick"
     data-infinite="true">
  <div class="js-slide bg-img-hero-center" style="background-image: url(../assets/img/img24.jpg);">
    <div class="space-5">
    </div>
  </div>
  <div class="js-slide bg-img-hero-center" style="background-image: url(../assets/img/img25.jpg);">
    <div class="space-5">
    </div>
  </div>
  <div class="js-slide bg-img-hero-center" style="background-image: url(../assets/img/img26.jpg);">
    <div class="space-5">
    </div>
  </div>
</div>
