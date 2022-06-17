import React from 'react';
import Layout from '@components/Layout/Layout';
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
              <div dangerouslySetInnerHTML={{__html: sanitize(showPlan.attributes.descripcion)}} />
              <p>{showPlan.attributes.precio}</p>
              <a href={showPlan.attributes.url} target="_blank">Quiero reservar</a>
              <p>{showPlan.attributes.adicionales}</p>
            </div>
          </div>
        )
      }
    </Layout>
  )
}

export default Plan
