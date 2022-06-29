import React from 'react'
import Layout from '../components/Layout/Layout'
import useKrpano from 'react-krpano-hooks'

const Tour = () => {

  const { containerRef } = useKrpano()

  return (
    <Layout>
      <div ref={containerRef} />
    </Layout>
  )
}

export default Tour