import React from 'react';
import Image from 'next/image';
import { picsMenu } from '../Constants/homePics';
import style from './HomePics.module.scss';

const HomePics = () => {
  const [id, setId] = React.useState(0);

  const handleClick = (id) => {
    setId(id);
  }

  return (
    <div className={style.menu}>
      <ul className={style.menu__inner}>
        {picsMenu.map((pic) => {
          return(
              <li key={pic.id} onClick={() => handleClick(pic.id)} className={id === pic.id ? style.selected : null}>
                {pic.name}
              </li>
            );
          })
        }
      </ul>
      <div className={style.images}>
        {picsMenu[id].pics.map((pic) => (
          <Image
            key={pic.id}
            src={pic.image}
            alt={pic.alt}
          />
        ))}
      </div>   
    </div>
  )
}

export default HomePics