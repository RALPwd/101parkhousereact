import React from 'react';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';
import Frame from '../components/HomeSlides/Frame';
import Image from 'next/image';
import { longStaysBenefits, otherBenefits } from '../components/Constants/longStaysBenefits';
import { 
  container, 
  grid,
  grid__item,
  grid__item__image,
  hero,
  secondGrid,
  secondGrid__item,
  secondGrid__item__image
} from './styles/LargasEstadias.module.scss';

const LargasEstadias = () => {

  return (
    <Layout>
      <div className={container}>
        <Title title="Largas Estadías" />
        <Frame title="Beneficios">
          <div className={grid}>
            {longStaysBenefits.map(benefit => (
              <div className={grid__item} key={benefit.id}>
                <div className={grid__item__image}>
                  <Image src={benefit.img} alt={benefit.text} />
                </div>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </Frame>
      </div>
      <div className={hero}>
        <p>
          Disfruta de estos beneficios por estadías de 1 mes en adelante
        </p>
      </div>
      <div className={secondGrid}>
        {otherBenefits.map(benefit => (
          <div className={secondGrid__item} key={benefit.id}>
            <div className={secondGrid__item__image}>
              <Image src={benefit.img} alt={benefit.text} />
            </div>
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default LargasEstadias