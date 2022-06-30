import React from 'react';
import styles from './HomeSlides.module.scss';
import cx from 'classnames';
import { GrNext } from 'react-icons/gr';
import { IconContext } from 'react-icons';


const NextArrow = ({ onClick }) => {

  const { nextArrow, arrow, svgIcon } = styles

  return (
    <IconContext.Provider value={{ className: svgIcon }}>
      <div className={cx(nextArrow, arrow)} onClick={onClick}>
        <GrNext/>
      </div>
    </IconContext.Provider>
  )
}

export default NextArrow;
