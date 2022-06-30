import React from 'react';
import styles from './HomeSlides.module.scss';
import cx from 'classnames';
import { GrPrevious } from 'react-icons/gr';
import { IconContext } from 'react-icons';


const PrevArrow = ({ onClick }) => {

  const { prevArrow, arrow, svgIcon } = styles

  return (
    <IconContext.Provider value={{ className: svgIcon }}>
      <div className={cx(prevArrow, arrow)} onClick={onClick}>
        <GrPrevious/>
      </div>
    </IconContext.Provider>
  )
}

export default PrevArrow;
