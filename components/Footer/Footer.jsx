import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          <span>
            <a href="https://www.facebook.com/hotel.el.carmen.3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/hotelelcarmen/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <span>
            <a href="https://www.tripadvisor.com.mx/Hotel_Review-g293924-d1209898-Reviews-Hotel_El_Carmen-Canc%C3%BAn_Yucat%C3%A1n.html" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tripadvisor"></i>
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer