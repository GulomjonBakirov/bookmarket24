import React, { useEffect, useState, useWindowDimensions } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/slider.css";
import { Link } from "react-router-dom";
import getWindowDimensions from "../utils/getWindowDimensions";

function ImageSlider({ children }) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:
      windowDimensions.width > 900
        ? 4
        : windowDimensions.width < 900 && windowDimensions.width > 700
        ? 3
        : windowDimensions.width < 700 && windowDimensions.width > 500
        ? 2
        : 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      {children ? (
        children.length < 4 && windowDimensions.width > 700 ? (
          <div className="cardList">
            {children.map((child, index) => (
              <div key={index} className="card-wrapper ">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={child.img}
                      width="300"
                      height="400"
                      alt="bookImage"
                    />
                  </div>
                  <ul className="social-icons">
                    <li>
                      <Link className="link" to="/product/:id">
                        Ba`tafsil
                      </Link>
                    </li>
                  </ul>
                  <div className="details">
                    <h2>
                      {child.name} <span className="job-title">Author</span>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Slider {...settings}>
            {children.map((child, index) => (
              <div key={index} className="card-wrapper">
                <div className="card">
                  <div className="card-image">
                    <img
                      src={child.img}
                      width="300"
                      height="400"
                      alt="bookImage"
                    />
                  </div>
                  <ul className="social-icons">
                    <li>
                      <Link className="link" to="/product/:id">
                        Ba`tafsil
                      </Link>
                    </li>
                    {/* <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li> */}
                  </ul>
                  <div className="details">
                    <h2>
                      {child.name} <span className="job-title">Author</span>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}

export default ImageSlider;
