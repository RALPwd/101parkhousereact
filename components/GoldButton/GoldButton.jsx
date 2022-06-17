import React from 'react'
import styles from './GoldButton.module.scss'

const GoldButton = ({ type, value, onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {value}
    </button>
  )
}

export default GoldButton