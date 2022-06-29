import React from 'react'
import Layout from '../components/Layout/Layout'
import useKrpano from 'react-krpano-hooks'

const Tour = () => {

  let krpano

  if(typeof window !== 'undefined') {
    const { containerRef } = useKrpano()
    krpano = containerRef
  }

  return (
    <Layout>
      <div ref={krpano} />
    </Layout>
  )
}

export default Tour
