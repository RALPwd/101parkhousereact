import React from 'react'
import styles from './LinkButtons.module.scss'

const LinkButtons = ({ label, href }) => {
  return (
    <span className={styles.linkButtons}>
      {label}
    </span>
  )
}

export default LinkButtons