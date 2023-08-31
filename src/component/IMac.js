import React, { useEffect } from "react";
import "../assests/Iphone.css";
import { Component } from "react";
import ReactDOM from "react-dom";
// import ReactCardCarousel from "react-card-carousel";

// import "swiper/swiper-bundle.css";
import AllProduct from "./AllProduct";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function IMac() {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <div className="legend-container" >
              
              <img
                src={require("../images/Imac.jpg")}
                alt=""
                className="background_slider"
               
              />
            </div>{" "}
          </div>
        </div>
        <div className="row slider_box" >
          <div className="col-lg-1">
            {" "}
            <a
              className="btn btn-primary mb-3 arrow_slider"
              role="button"
              data-slide="prev"
              onClick={() => slider.current.slickPrev()}
            >
              <i className="fa fa-arrow-left "></i>
            </a>
          </div>
          <div className="col  d-flex justify-content-center">
            <div className="slider-container">
              <Slider {...settings} ref={slider}>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  iMac20,1
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  iMac20,2
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  iMac19,1
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                  iMac19,2
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                    iMac
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                    watch
                  </button>
                </div>
                <div>
                  {" "}
                  <button class="CARD_STYLE" tabindex="-1">
                    iPad{" "}
                  </button>
                </div>
              </Slider>
            </div>
            </div>

            <div className="col">
              {" "}
              <a
                className="btn btn-primary mb-3 arrow_slider"
                role="button"
                data-slide="next"
                onClick={() => slider.current.slickNext()}
              >
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
        </div>
        <AllProduct />
      </div>
    </>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<IMac />, rootElement);