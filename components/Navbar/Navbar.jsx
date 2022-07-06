import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../public/images/mainlogo.png'	
import { mainLinks } from '../Constants/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

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
          </ul>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <span className={styles.logocontainer}>
                  <Image 
                    src={logo}
                  />
                </span>
              </a>
            </Link>
          </div>
          <ul>
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
          <div className={styles.hamburgercontainer}>
            <Hamburger color='#fff' toggle={() => setIsOpen(!isOpen)} toggled={isOpen} />
          </div>
        </menu>
      </nav>
      <div className={styles.fullscreenmenu} style={{display: !isOpen ? 'none' : 'block'}}>
        <ul>
          {mainLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Navbar