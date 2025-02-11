import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { SliderProp } from "./props";





const PricingSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,


    nextArrow: (
      <div>
        <div className="next-slick-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
    
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,

        }
      },

      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1
        }
      }

    ]
  };




  return (
    <div className="slider-container">
      <Slider {...settings}>
        <SliderProp
          image='../images/hotel.jpg'
          heading='Soho Paradise'
          rating={4.9}
          location='Ibiza, Spain'
          price={50}
        />
        <SliderProp
          image='../images/Hero-image.png'
          heading='Hotel Baja'
          rating="5.0"
          location='Palo Alto, CA'
          price={19}
        />
        <SliderProp
          image='../images/hotel1.jpg'
          heading='Hudak Homes'
          rating={4.5}
          location='Arizona, RAK'
          price={99}
        />
        <SliderProp
          image='../images/spain.jpg'
          heading='Wyatt Residency'
          rating={4.8}
          location='Rome, Italy'
          price={39}
        />
      </Slider>
    </div>
  )
}
export default PricingSlider;
