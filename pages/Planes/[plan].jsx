import React from 'react'
import Layout from '../../components/Layout/Layout'
import GoldButton from '@components/GoldButton/GoldButton'
import PlanMenu from './PlanMenu'
import API_URL from '../../components/Constants/api'
import { sanitize } from 'dompurify'
import { useRouter } from 'next/router'
import style from './Plan.module.scss'

const Planes = () => {
  const router = useRouter()
  const { plan } = router.query
  const url = `${API_URL}/api/plans/${plan}?populate=*`
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
          <div className={style.plan} style={{backgroundImage: `url(${showPlan.attributes.imagen.data.attributes.url})`}}>
            <div className={style.plan__description}>
              <h1>{showPlan.attributes.titulo}</h1>
              <div className={style.plan__description__items} dangerouslySetInnerHTML={{__html: sanitize(showPlan.attributes.descripcion)}} />
              <div className={style.plan__prices}>
                <p>Desde ${parseInt(showPlan.attributes.precio, 10).toLocaleString()}</p>
                <GoldButton type="button" value="Quiero reservar" onClick={() => window.open(showPlan.attributes.url, "_blank")} />
              </div>
              <div className={style.plan__additionals}>
                <p>{showPlan.attributes.adicionales}</p>  
              </div>
            </div>
          </div>
        )
      }
    </Layout>
  )
}

export default Planes