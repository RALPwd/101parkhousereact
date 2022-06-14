import React from 'react'
import Layout from '../../components/Layout/Layout'
import PlanMenu from './PlanMenu'
import API_URL_DEV from '../../components/Constants/api'
import { useRouter } from 'next/router'

const Planes = () => {
  const router = useRouter()
  const { plan } = router.query
  const url = `${API_URL_DEV}/api/plans/${plan}?populate=*`
  const [showPlan, setShowPlan] = React.useState("")

  React.useEffect(() => {
    if(!router.isReady) return
    fetch(url)
      .then(response => response.json())
      .then(data => setShowPlan(data.data))
  }, [router.isReady, url])

  return (
    <Layout>
      <PlanMenu />
      {
        !showPlan ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div style={{backgroundImage: `url(${API_URL_DEV}${showPlan.attributes.imagen.data.attributes.url})`}}>
              <h1>{showPlan.attributes.titulo}</h1>
              <p>{showPlan.attributes.descripcion}</p>
              <p>{showPlan.attributes.precio}</p>
            </div>
          </div>
        )
      }
    </Layout>
  )
}

export default Planes