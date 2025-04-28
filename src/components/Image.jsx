import { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import Modal from './Modal'

function Image({src, alt, style}) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <a onClick={(e) => {
      console.log(e.target);
      e.stopPropagation();
    }}>
      <img 
        src={src} 
        alt={alt} 
        style={style} 
        onClick={(e) => {
          setIsOpen(true);
        }}
      />
    </a>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className='photo-container'>
        <div className='photo'>
          <img src={src} alt={alt} style={style} />
        </div>
        <p>{alt}</p>
      </div>
    </Modal>
  </>
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
}

export default Image
