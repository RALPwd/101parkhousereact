import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import GoldButton from '@components/GoldButton/GoldButton';
import styles from './BookForm.module.scss'
import "react-datepicker/dist/react-datepicker.css";
setDefaultLocale('es');
registerLocale('es', es);

const BookForm = () => {
  const [datein, setDatein] = useState(new Date());
  const [dateout, setDateout] = useState(new Date());
  const [dateOutSelected, setDateOutSelected] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    const windowSize = window.matchMedia('(max-width: 1024px)');
    console.log(windowSize.matches);
    if(windowSize.matches) {
      // setIsMobile(true);
      setIsVisible(false);
    }
  }, [])

  const handleSetDateIn = (date) => {
    setDatein(date);
    if(!dateOutSelected) {
      setDateout(date);
      setDateOutSelected(true);
    }
  }

  return (
    <>
      <div className={styles.BookForm} style={{display: !isVisible ? "none" : "flex"}}>
        <div className={styles.BookForm__container}>
          <form 
            action="https://reservations.travelclick.com/74375"
            method='get'
            name='resform'
            id='resform'
            target='_blank'
          >
            <input type="hidden" name="HotelID" value="74375" />
            <input type="hidden" name="LanguageID" value="2" />
            <input type="hidden" name="Rooms" value="1" />
            <label className={styles.BookForm__input}>
              Llegada
              <DatePicker
                name='DateIn'
                selected={datein}
                onChange={handleSetDateIn}
                selectsStart
                startDate={datein}
                endDate={dateout}
                minDate={new Date()}
                className={styles.BookForm__datepicker}
              />
            </label>
            <label className={styles.BookForm__input}>
              Salida
              <DatePicker
                name='DateOut'
                selected={dateout}
                onChange={(date) => setDateout(date)}
                selectsEnd
                startDate={datein}
                endDate={dateout}
                minDate={datein}
                className={styles.BookForm__datepicker}
              />
            </label>
            <label className={styles.BookForm__input}>
              Adultos
              <select name="Adults" id="adults" className={styles.BookForm__select}>
                <option value="1">1 Adulto</option>
                <option value="2">2 Adultos</option>
                <option value="3">3 Adultos</option>
              </select>
            </label>
            <label className={styles.BookForm__input}>
              Niños &nbsp; <span>(de 0 a 10 años)</span>
              <select name="Children" id="children" className={styles.BookForm__select}>
                <option value="0">0 Niños</option>
                <option value="1">1 Niño</option>
                <option value="2">2 Niños</option>
              </select>
            </label>
            <div className={styles.BookForm__button}>
              <GoldButton type="submit" value="Reservar" />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.goldbuttoncontainer}>
        <GoldButton type="button" value={!isVisible ? "Reservar" : "Regresar"} onClick={() => setIsVisible(!isVisible)} />
      </div>
    </>
  )
}

export default BookForm