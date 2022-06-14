import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import LinkButtons from '@components/LinkButtons/LinkButtons'
import logo from '../../public/images/mainlogo.png'	
import { mainLinks } from '../Constants/navigation'

const Navbar = () => {

  const firstLinks = mainLinks.slice(0, 4)
  const lastLinks = mainLinks.slice(-4)

  return (
    <header className={styles.header}>
      <nav>
        <menu>
          <ul>
            {firstLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
            <li className={styles.logo}>
              <Link href="/">
                <a>
                  <span className={styles.logocontainer}>
                    <Image 
                      src={logo}
                    />
                  </span>
                </a>
              </Link>
            </li>
            {lastLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
            <li>
              <div className={styles.langbutton}>
                <a href="#">
                  EN
                </a>
              </div>
            </li>
          </ul>
        </menu>
      </nav>
    </header>
  )
}

export default Navbar