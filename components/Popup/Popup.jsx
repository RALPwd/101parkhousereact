import React from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import API_URL from '../../components/Constants/api';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgb(12, 13, 56, 0.5)',
    zIndex: '1000000000',
  }
}

const Popup = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const [image, setImage] = React.useState('')
  const [link, setLink] = React.useState(null)

  React.useEffect(() => {
    const getPopup = async () => {
      const url = `${API_URL}/api/popup?populate=*`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if(data.data !== null) {
        setImage(data.data.attributes.popup.data.attributes.url)
        setLink(data.data.attributes.url)
        setModalIsOpen(true)
      }
    }
    getPopup();
  }, [])


  return (
    <>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      closeTimeoutMS={500}
      style={modalStyles}
      ariaHideApp={false}
    >
      <FaWindowClose 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer'
        }}
        size={30}
        color="#0c0d38"
        onClick={() => setModalIsOpen(false)} 
      />
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}>
        {
          link && (
            <a href={link} target='_blank' style={{width:'100%', height:'100%', display:'block'}}>
            </a>
          )
        }
      </div>
    </Modal>
    </>
  )
}

export default Popup