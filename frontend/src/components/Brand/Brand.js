import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";
import icon4 from "../../images/icon4.jpg";
import icon5 from "../../images/icon5.jpg";
import icon6 from "../../images/icon6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brand.css";

function Brand() {
  const settings = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="brand">
      <Container fluid>
        <div className="brand-slider">
          <Slider {...settings}>
            <div class="brand-item">
              <img src={icon1} alt="" />
            </div>
            <div class="brand-item">
              <img src={icon2} alt="" />
            </div>
            <div class="brand-item">
              <img src={icon3} alt="" />
            </div>
            <div class="brand-item">
              <img src={icon4} alt="" />
            </div>
            <div class="brand-item">
              <img src={icon5} alt="" />
            </div>
            <div class="brand-item">
              <img src={icon6} alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Brand;
