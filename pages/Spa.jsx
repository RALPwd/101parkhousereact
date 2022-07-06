import React from 'react'
import GoldButton from '@components/GoldButton/GoldButton'
import Title from '@components/Title/Title'
import Layout from '../components/Layout/Layout'
import styles from './styles/Restaurante.module.scss'
import { spa } from '../components/Constants/spa'

const Spa = () => {
  const [spaMenu, setSpaMenu] = React.useState(spa[0]);
  
  const handleClick = (e) => {
    setSpaMenu(spa.find(item => item.id === e.target.value));
  }

  return (
    <Layout>
      <div className={styles.title}>
        <Title title="Servicios de spa" />
        <p>
        Permítenos consentirte de pies a cabeza en nuestro OneoOne Day Spa. Cada detalle ha sido cuidadosamente planeado para maximizar tu experiencia de confort y relajación para tu cuerpo y tu mente. Si buscas un espacio para ejercitarte, embellecerte o relajarte encontrarás en nuestro Spa el lugar adecuado para hacer una pausa y empezar de nuevo tu día.
        </p>
      </div>
      <div className={styles.menu}>
        <ul>
          {
            spa.map(item => (
              <li key={item.id} onClick={handleClick} value={item.id} className={item.id === spaMenu.id ? styles.active : null}>
                {item.title}
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <div className={styles.restaurant} style={{backgroundImage: `url(${spaMenu.background.src})`}}>
          <div className={styles.restaurant__description}>
            <div dangerouslySetInnerHTML={{__html: spaMenu.description}} />
            <div className={styles.restaurant__button}>
              <GoldButton value='Descargar brochure de servicios de spa' onClick={() => {window.open('/docs/spa_es_carta_sistema_1.pdf', '_blank')}} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Spa