import React from 'react'
import styles from './Layout.module.scss'

import Navbar from '../Navbar/Navbar'
import BookForm from '@components/BookForm/BookForm'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <BookForm />
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