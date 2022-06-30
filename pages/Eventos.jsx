import React from 'react'
import Image from 'next/image'
import Title from '@components/Title/Title'
import Layout from '../components/Layout/Layout'
import GoldButton from '@components/GoldButton/GoldButton'
import EventsSlider from '@components/EventsSlider/EventsSlider'
import DatePicker from 'react-datepicker'
import styles from './styles/Eventos.module.scss'
import map from '../public/images/mapa.jpg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Eventos = () => {
  const [event, setEvent] = React.useState({
    nombre: '',
    email: '',
    celular: '',
    tipo_evento: '',
    descripcion: '',
    adultos: 0,
    ninos: 0,
    fecha: new Date(),
  })
  const [isValid, setIsValid] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const handleValidation = () => {
      const { nombre, email, celular, tipo_evento, descripcion, adultos } = event
      if(
        nombre.length > 0 &&
        email.length > 0 &&
        celular.length > 0 &&
        tipo_evento.length > 0 &&
        descripcion.length > 0 &&
        adultos > 0
      ) { setIsValid(true) }
    }
    handleValidation()
  }, [event])
    


  const handleEventsSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      const res = await fetch('/api/eventos', {
        body: JSON.stringify(event),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const { error } = await res.json()
      if (error) {
        console.log(error)
      } else {
        window.alert('El formulario ha sido enviado, pronto nos pondremos en contacto con usted.')
        setEvent({
          nombre: '',
          email: '',
          celular: '',
          tipo_evento: '',
          descripcion: '',
          adultos: 0,
          ninos: 0,
          fecha: new Date(),
        })
      }
    } else {
      window.alert('Por favor, complete todos los campos')
      console.log(event);
    }
  }

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    })
  }

  const handleDateChange = (date) => {
    setDate(date)
    setEvent({
      ...event,
      fecha: date.toString(),
    })
  }

  return (
    <Layout>
      <Title title="Eventos" />
      <div className={styles.container}>
        <div className={styles.container__description}>
          <p>Contamos con todos los servicios y áreas para garantizar el éxito de sus congresos, eventos corporativos o sociales. Nuestros salones con terrazas cubiertas, vista al parque y un gran servicio logístico serán el complemento para que viva su evento en la ciudad de Bogotá al 101%.
          <br />
          Nuestra prioridad es el servicio y por eso contamos con un equipo profesional a su disposición. Ofrecemos 40 parqueaderos cubiertos, salones con capacidades para pequeñas reuniones o hasta 160 personas en auditorio. Sus eventos sociales serán momentos inolvidables en su vida, nos encargaremos de todos los detalles y lo asesoraremos gracias a nuestros aliados. Nuestros salones cuentan con todo el menaje, mesas, sillas, mantelería, cubertería y cristalería de lujo.
          <br /><br />
          Contáctenos a nuestro email <a href="mailto:eventos@101ph.co">eventos@101ph.co</a> o comuníquese al cel. <strong><a href="tel:+573212481231">3212481231</a></strong>  </p>
          <EventsSlider />
          <br />
          <br /> 
          <a href='/docs/eventos.pdf' target='_blank' rel='noopener noreferrer'>
            Ver catálogo de eventos
          </a>
        </div>
        <div className={styles.container__form}>
          <h2>Cotiza tu evento</h2>
          <div className={styles.container__form__inner}>
              <form onSubmit={handleEventsSubmit}>
                <label htmlFor="nombre">
                  Nombre y apellido
                  <input type="text" name="nombre" id="nombre" value={event.name} onChange={handleChange}/>
                </label>
                <label htmlFor="email">
                  Correo electrónico
                  <input type="email" name="email" id="email" value={event.email} onChange={handleChange}/>
                </label>
                <label htmlFor="celular">
                  Celular
                  <input type="text" name="celular" id="celular" value={event.celular} onChange={handleChange}/>
                </label>
                <label htmlFor="tipo_evento">
                  Tipo de evento
                  <div className={styles.radios}>
                    <label htmlFor="social" className={styles.labelinline}>
                      <input type="radio" name="tipo_evento" id="social" value="Social" checked={event.tipo_evento === "Social"} onChange={handleChange} />
                      Social
                    </label>
                    <label htmlFor="corporativo" className={styles.labelinline}>
                      <input type="radio" name="tipo_evento" id="corporativo" value="Corporativo" checked={event.tipo_evento === "Corporativo"} onChange={handleChange}/>
                      Corporativo
                    </label>
                  </div>
                </label>
                <label htmlFor="descripcion">
                  Descripción
                  <textarea name="descripcion" id="descripcion" cols="30" rows="8" onChange={handleChange} value={event.descripcion} />
                </label>
                <label htmlFor="numero_personas">
                  Número de personas
                  <div className={styles.quantity}>
                    <label htmlFor="adultos" className={styles.labelinline}>
                      Adultos
                      <input type="number" name="adultos" id="adultos" min="0" value={event.adultos} onChange={handleChange}/>
                    </label>
                  </div>
                  <div className={styles.quantity}>
                    <label htmlFor="ninos" className={styles.labelinline}>
                      <div>Niños &nbsp; &nbsp; <span>de 0 a 10 años</span></div>  
                      <input type="number" name="ninos" id="ninos" min="0" value={event.ninos} onChange={handleChange}/>
                    </label>
                  </div>
                </label>
                <div className={styles.date}>
                  <label htmlFor="fecha">
                    Fecha y hora
                    <DatePicker
                      selected={date}
                      showTimeSelect
                      dateFormat="d MMMM, yyyy h:mm aa"
                      name='fecha'
                      onChange={handleDateChange}
                      minDate={new Date()}
                    />
                  </label>
                </div>
                <GoldButton type="submit" value="Enviar"/>
              </form>
          </div>
        </div>
      </div>
      <div className={styles.mapcontainer}>
        <Title title="Ubicación"/>
        <p>
        Ubicado en zona residencial al lado del parque. Contamos con facilidad de acceso y cercanía a los principales centros de negocios y comerciales <br /><br />
        Mapa de ruta desde el Aeropuerto Internacional El Dorado
        </p>
        <Image src={map} />
      </div>
    </Layout>
  )
}

export default Eventos