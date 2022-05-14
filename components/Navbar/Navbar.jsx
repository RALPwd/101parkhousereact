import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import logo from '../../public/images/mainlogo.png'	

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <menu>
          <ul>
            <li>
              <Link  href="/Suites">
                <a>Suites</a>
              </Link>
            </li>
            <li>
              <Link href="/Planes">
                <a>Planes</a>
              </Link>
            </li>
            <li>
              <Link href="/LargasEstadias">
                <a>Largas Estadias</a>
              </Link>
            </li>
            <li>
              <Link href="/Eventos">
                <a>Eventos</a>
              </Link>
            </li>
            <li className={styles.logo}>
              <Link href="/">
                <a>
                  <span className={styles.logocontainer}>
                    <Image 
                      src={logo}
                      width="140%"
                      height="100%"
                      layout="intrinsic"
                    />
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/Restaurante">
                <a>Restaurante</a>
              </Link>
            </li>
            <li>
              <Link href="/Bar">
                <a>Bar</a>
              </Link>
            </li>
            <li>
              <Link href="/Spa">
                <a>Spa</a>
              </Link>
            </li>
            <li>
              <Link href="/Tour">
                <a>Vista 360<sup>o</sup></a>
              </Link>
            </li>
            <li>
              <div className={styles.langbutton}>
                <a href="#">
                  EN
                </a>
              </div>
            </li>
          </ul>
          <div className={styles.topbuttons}>
            <Link href="/EnVivo">
              <a>Eventos en vivo</a>
            </Link>
            <a href="#">Reservar</a>
          </div>
        </menu>
      </nav>
    </header>
  )
}

export default Navbar