import React from 'react';
import Slider from "react-slick";
import styles from './HomeSlides.module.scss';
import cx from 'classnames';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => {

  const { nextArrow, arrow, svgIcon } = styles

  return (
    <IconContext.Provider value={{ className: svgIcon }}>
      <div className={cx(nextArrow, arrow)} onClick={onClick}>
        <GrNext color='yellow'/>
      </div>
    </IconContext.Provider>
  )
}

const PrevArrow = ({ onClick }) => {

  const { prevArrow, arrow, svgIcon } = styles

  return (
    <IconContext.Provider value={{ className: svgIcon }}>
      <div className={cx(prevArrow, arrow)} onClick={onClick}>
        <GrPrevious/>
      </div>
    </IconContext.Provider>
  )
}

const HomeSlides = ({ slides }) => {

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 800,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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