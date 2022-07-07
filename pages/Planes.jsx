import React from 'react';
import Layout from '@components/Layout/Layout';
import GoldButton from '@components/GoldButton/GoldButton';
import PlanMenu from './Planes/PlanMenu';
import API_URL from '@components/Constants/api';
import style from './Planes/Plan.module.scss';
import { sanitize } from 'dompurify';

const Plan = () => {
  const [showPlan, setShowPlan] = React.useState("");
  const url = `${API_URL}/api/plans?sort=id&populate=*`;
  
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setShowPlan(data.data[0]));
  }, []);

  React.useEffect(() => {
    console.log(showPlan.attributes);
  }, [showPlan]);

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

export default Plan
