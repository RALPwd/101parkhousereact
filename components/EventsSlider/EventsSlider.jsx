import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { eventsSlides } from '@components/Constants/sliders';

const EventsSlider = () => {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 800,
    dots: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {
          eventsSlides.map((slide, index) => {
            return(
              <div key={index}>
                <Image src={slide.image} alt={slide.title} width={1200} height={800} />
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default EventsSlider
