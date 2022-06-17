import React from 'react';
import Frame from '@components/HomeSlides/Frame';
import HomeSlides from '@components/HomeSlides/HomeSlides';
import Popup from '@components/Popup/Popup';
import Layout from '@components/Layout/Layout';
import HomePics from '@components/HomePics/HomePics';
import styles from './styles/index.module.scss';
import { benefitsSlides, alliesSlides } from '@components/Constants/sliders.js';

const Home = () => {

  return (
    <Layout>  
      <section className={styles.mainBanner}>
        <video src='https://res.cloudinary.com/h101parkhouse-com/video/upload/v1654881018/bannervideo_pdu4ah.mp4' autoPlay muted controls={false} loop></video>
      </section>
      <Popup />
      <Frame title="Beneficios de alojarte en 101">
        <HomeSlides slides={benefitsSlides} />
      </Frame>
      <HomePics />
      <Frame title="Disfruta en familia con nuestros aliados">
        <HomeSlides slides={alliesSlides} />
      </Frame>
    </Layout>
  )
}

export default Home