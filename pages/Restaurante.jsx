import React from 'react'
import Image from 'next/image'
import GoldButton from '@components/GoldButton/GoldButton'
import Title from '@components/Title/Title'
import Layout from '../components/Layout/Layout'
import styles from './styles/Restaurante.module.scss'
import { restaurant } from '../components/Constants/restaurant'
import qr from '../public/images/qrcluvynew.jpeg'

const Restaurante = () => {
  const [restaurantMenu, setRestaurantMenu] = React.useState(restaurant[0]);
  
  const handleClick = (e) => {
    setRestaurantMenu(restaurant.find(item => item.id === e.target.value));
    console.log(restaurantMenu.background.src);
  }

  return (
    <Layout>
      <div className={styles.title}>
        <Title title="Restaurante" />
        <p>
          Cassis Restaurante&amp;Cava, el restaurante del Hotel 101 Park House, es ese
          espacio ideal para los negocios o compartir en familia y amigos al calor
          de la chimenea y de la exquisita comida. Además de la gran variedad de
          platos internacionales, nuestros clientes pueden disfrutar de opciones
          gourmet de influencia mediterránea y acompañar este momento con la
          variada selección de vinos.
        </p>
        <h3>Nuestros horarios de atención son:</h3>
        <p>
          De lunes a sábado desde las 6:00 am hasta las 10:00 pm <br />
          Domingos y festivos desde las 6:00 am hasta las 8:00 pm
        </p>
      </div>
      <div className={styles.menu}>
        <ul>
          {
            restaurant.map(item => (
              <li key={item.id} onClick={handleClick} value={item.id} className={item.id === restaurantMenu.id ? styles.active : null}>
                {item.title}
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <div className={styles.restaurant} style={{backgroundImage: `url(${restaurantMenu.background.src})`}}>
          <div className={styles.restaurant__description}>
            <div dangerouslySetInnerHTML={{__html: restaurantMenu.description}} />
            <div className={styles.restaurant__button}>
              <GoldButton value='Descargar menú restaurante' onClick={() => {window.open('/docs/nuevomenu.pdf', '_blank')}} />
            </div>
            <a href="https://101togo.cluvi.co/restaurante-cassis" target='_blank'>
              <Image src={qr} alt="QR" width={200} height={200} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Restaurante