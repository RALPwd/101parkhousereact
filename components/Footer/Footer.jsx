import React from 'react'
import Link from 'next/link'
import LinkButtons from '@components/LinkButtons/LinkButtons'
import styles from './Footer.module.scss'
import Image from 'next/image'
import { 
  mainlogo,
  laBarra,
  luxury,
  portafolio,
  starDiamond,
  tripAdvisor,
  wordTravelRound,
  wordTravel, 
} from '../Constants/images'
import { mainLinks, footerSecondaryLinks, socialLinks } from '../Constants/navigation'

const Footer = () => {
  
  const prizes = [
    tripAdvisor,
    portafolio,
    laBarra,
    starDiamond,
    wordTravel,
    wordTravelRound,
    luxury
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logos}>
          <div className={styles.footer__logo}>
            <Link href="/">
              <a>
                <Image
                  src={mainlogo}
                />
              </a>
            </Link>
          </div>
          <div className={styles.footer__prizes}>
            <h5>Premios</h5>
            {prizes.map((prize, index) => (
              <div key={index} className={styles.footer__prize}>
                <Image
                  src={prize}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.footer__menu}>
          <ul>
            {mainLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <a href="#">
            <LinkButtons label="Reservar" />
          </a>
        </div>
        <div className={styles.footer__contactinfo}>
          <div className={styles.footer__contactinfo__inner}> 
            <p>Contáctanos</p>
            <div className={styles.footer__contactinfo__address}>
              <a href="https://goo.gl/maps/MebG5Q23qi3mND5f7">
                <p>Cra 21 # 101-10 Hotel 101 Park House. Bogotá - Colombia</p>
              </a>
              <p>
                PBX <a href="tel:+576016000101">+57 601 6000101</a> |
                <a href="tel:+576016000102">+57 601 6000102</a> |
                Cel <a href="tel:+573144149184">+57 314 414 9184</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer__secondaryLinks}>
          <div className={styles.footer__secondaryLinks__legal}>
            <ul>
              {footerSecondaryLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} target={link.target}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footer__secondaryLinks__social}>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target={link.target}>
                <Image
                  src={link.image}
                  width={50}
                  height={50}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer