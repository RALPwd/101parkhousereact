import React from 'react'
import styles from './HomeSlides.module.scss'

const Frame = ({ title, children }) => {
  return (
    <div className={styles.outerframe}>
      <div className={styles.innerframe}>
        <div className={styles.innerframe__content}>
          <span className={styles.innerframe__content__title}>
            {title}
          </span>
          <div className={styles.innerframe__content__slider}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frame