import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Slider from 'react-slick';
import { suites } from '@components/Constants/suites';
import styles from './Suites.module.scss';
import { IconContext } from 'react-icons';

const NextArrow = ({ onClick }) => {

  const { nextArrow, arrow, svgIcon } = styles

  return (
    <IconContext.Provider value={{ className: svgIcon }}>
      <div className={cx(nextArrow, arrow)} onClick={onClick}>
        <GrNext/>
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


const SuiteMenu = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.menu}>
      <h2>
        Nuestras habitaciones
      </h2>
      <p>
        Las habitaciones más grandes de la ciudad con tina y chimenea
      </p>
      <Slider {...settings}>
      {
        suites.map(suite => (
          <div key={suite.id} className={styles.slide}>
            <div className={styles.slide__imagecontainer}>
              <Image src={suite.img} alt={suite.name} layout='responsive' />
            </div>
            <h3>{suite.name}</h3>
            <div className={styles.slide__buttons}>
              <a href="https://bookings.travelclick.com/74375?LanguageID=2" target="_blank">Reservar</a>
              <Link href={`/Suites/${suite.id}`}>
                <a>Ver más</a>
              </Link>
            </div>
          </div>
        ))
      }
      </Slider>
    </div>
  )
}

export default SuiteMenu