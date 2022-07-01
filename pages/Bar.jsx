import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Layout from '../components/Layout/Layout'
import Title from '@components/Title/Title'
import { barSlides } from '@components/Constants/sliders'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles/Bar.module.scss'

const Bar = () => {

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
    <Layout>
      <Title title="Bar" />
      <div className={styles.slidercontainer}>
        <Slider {...settings}>
          {
            barSlides.map((slide, index) => {
              return(
                <div key={index} className={styles.barslide}>
                  <Image
                    src={slide.image}
                    alt='bar'
                    width={1366}
                    height={768}
                  />
                </div>
              )
            })
          }
        </Slider>
        <div className={styles.description}>
          <div>
            <p>
              En BLAU BAR TAPAS&VINOS, Contamos con amplia selección de vinos; degustarás las exquisitas opciones de snacks y un coctel siempre preparado a su gusto.
            </p>
          </div>
          <div>
            <p>
              <strong>Nuestros horarios de atención son:</strong>
              <br />
              <br />
              De Lunes a Sábado desde las 6:00 am hasta las 10:00 pm
              <br />
              Domingo y festivos desde las 6:00 am hasta las 8:00 pm
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Bar