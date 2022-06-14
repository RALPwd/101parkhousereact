import React from 'react';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';
import Frame from '../components/HomeSlides/Frame';
import HomePics from '@components/HomePics/HomePics';
import Image from 'next/image';
import { longStaysBenefits, otherBenefits } from '../components/Constants/longStaysBenefits';
import styles from './styles/LargasEstadias.module.scss';

const LargasEstadias = () => {

  return (
    <Layout>
      <div className={styles.container}>
        <Title title="Largas Estadías" />
        <Frame title="Beneficios">
          <div className={styles.grid}>
            {longStaysBenefits.map(benefit => (
              <div className={styles.grid__item} key={benefit.id}>
                <div className={styles.grid__item__image}>
                  <Image src={benefit.img} alt={benefit.text} />
                </div>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </Frame>
      </div>
      <div className={styles.hero}>
        <p>
          Disfruta de estos beneficios por estadías de 1 mes en adelante
        </p>
      </div>
      <div className={styles.secondGrid}>
        {otherBenefits.map(benefit => (
          <div className={styles.secondGrid__item} key={benefit.id}>
            <div className={styles.secondGrid__item__image}>
              <Image src={benefit.img} alt={benefit.text} />
            </div>
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.secondHero}>
        <p>
          Pregunta por nuestras tarifas con o sin desayuno / aseo diario o semanal / paquetes especiales de lavandería y alimentación / habitaciones con lavadora y secadora / suites con terraza de 35 m<sup>2</sup>
        </p>
      </div>
      <HomePics />
    </Layout>
  )
}

export default LargasEstadias