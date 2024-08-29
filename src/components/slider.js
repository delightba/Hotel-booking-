import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// import {  Star, Location, Dollar,Arro, Clock, Loca } from "../icons";


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", marginRight: '20px', marginLeft: '7px' }}
      onClick={onClick}
    />
  );
}


const BlogSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

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
        <div className="card ms-3">
          <img src="../images/hotel.jpg" className="w-100" alt="hotel" />
          <div className="card-body">

          </div>
        </div>
        <div className="card ms-3">
          <img src="../images/hotel.jpg" className="w-100" alt="hotel" />
          <div className="card-body">

          </div>
        </div>
        <div className="card ms-3">
          <img src="../images/hotel.jpg" className="w-100" alt="hotel" />
          <div className="card-body">

          </div>
        </div>
        <div className="card ms-3">
          <img src="../images/hotel.jpg" className="w-100" alt="hotel" />
          <div className="card-body">

          </div>
        </div>
      </Slider>
    </div>
  )
}
export default BlogSlider;
