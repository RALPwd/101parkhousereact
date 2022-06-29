import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import API_URL from '../../components/Constants/api';
import style from './Plan.module.scss';

const PlanMenu = () => {
  const [plans, setPlans] = React.useState([]);
  const url = `${API_URL}/api/plans?sort=id`;
  const router = useRouter();

  React.useEffect(() => {
    if (!plans.length) {
      fetch(url)
        .then(response => response.json())
        .then(data => setPlans(data.data));
    }
    console.log(plans);
  }, [plans]);

  return (
    <div className={style.planMenu}>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id} className={plan.id == router.query.plan ? style.active : null}>
            <Link href={`/Planes/${plan.id}`}>
              <a>{plan.attributes.titulo}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlanMenu