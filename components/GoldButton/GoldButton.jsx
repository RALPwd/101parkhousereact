import React from 'react'
import styles from './GoldButton.module.scss'

const GoldButton = ({ type, value }) => {
  return (
    <button type={type} className={styles.button}>
      {value}
    </button>
  )
}

export default GoldButton