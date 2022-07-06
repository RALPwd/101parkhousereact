import React from 'react';
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import styles from './HomeSlides.module.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeSlides = ({ slides }) => {

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 800,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }, 
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {
          slides.map((slide, index) => {
            return(
              <div className={styles.slide} key={index}>
                <h2>
                  {slide.title}
                </h2>
                <p dangerouslySetInnerHTML={{ __html: slide.description }} />
              </div>
            )
          })
        }  
      </Slider>
    </div>
  )
}

export default HomeSlides