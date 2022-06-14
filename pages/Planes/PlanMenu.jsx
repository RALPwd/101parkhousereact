import React from 'react';
import Link from 'next/link';
import API_URL_DEV from '../../components/Constants/api';

const PlanMenu = () => {
  const [plans, setPlans] = React.useState([]);
  const url = `${API_URL_DEV}/api/plans`;

  React.useEffect(() => {
    if (!plans.length) {
      fetch(url)
        .then(response => response.json())
        .then(data => setPlans(data.data));
    }
    console.log(plans);
  }, [plans]);

  return (
    <div>
      <ul>
        {plans.map((plan) => (
          <li key={plan.attributes.id}>
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