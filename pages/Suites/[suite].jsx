import React from 'react';
import Slider from 'react-slick';
import Layout from '@components/Layout/Layout';
import GoldButton from '@components/GoldButton/GoldButton';
import SuiteMenu from './SuiteMenu';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { suites } from '@components/Constants/suites';
import styles from './Suites.module.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Suite = () => {
  const router = useRouter();
  const { suite } = router.query;
  const suiteData = suites.find(suit => suit.id === suite) || suites[0];
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
      <div className={styles.details}>
        <h2>{suiteData.name} {suiteData.size}</h2>
        <div className={styles.details__inner}>
          <div className={styles.details__inner__slider}>
            <Slider {...settings}>
              {suiteData.images.map((image) => {
                return (
                  <div key={image.id}>
                    <Image src={image.img} alt={image.alt}/>
                  </div>
                )
              }
              )}
            </Slider>
          </div>
          <div className={styles.details__inner__info}>
            <div className={styles.details__inner__info__description}>
              <ul>
                {
                  suiteData.description.map((item, index) => {
                    return (
                      <li key={index}>
                        {item}
                      </li>
                    )
                  }
                  )
                }
              </ul>
            </div>
            <div className={styles.details__inner__info__size}>
              <h3>{suiteData.size}</h3>
              <p>Tamaño de suite</p>
            </div>
            <div className={styles.details__inner__info__size}>
              <h3>{suiteData.maxCapacity}</h3>
              <p>Capacidad máxima</p>
            </div>
            <div className={styles.details__inner__info__booking}>
              <GoldButton value="Reservar" onClick={() => {window.open('https://bookings.travelclick.com/74375?LanguageID=2', '_blank')}} />
            </div>
          </div>
        </div>
      </div>
      {/* <h2>
        {suiteData.name}
      </h2>
      {
        suiteData.images.map(image => (
          <Image
            key={image.id}
            src={image.img}
            alt={image.alt}
            width={200}
            height={200}
          />
        ))
      } */}
      <SuiteMenu />
    </Layout>
  )
}

export default Suite
