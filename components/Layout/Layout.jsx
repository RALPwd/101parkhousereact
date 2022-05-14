import React from 'react'
import styles from './Layout.module.scss'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout