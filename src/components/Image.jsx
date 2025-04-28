import { useState } from 'react';
import PropTypes from 'prop-types'
import Modal from './Modal'
import { motion } from 'motion/react';

function Image({src, alt, className}) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <a onClick={(e) => {
      console.log(e.target);
      e.stopPropagation();
    }}>
      <motion.img 
        src={src} 
        alt={alt} 
        className={className} 
        onClick={(e) => {
          setIsOpen(true);
        }}
        
        whileHover={{ border: '10px solid #ddd' }}
        
        whileTap={{
          scale: 0.8,
          rotate: Math.random() > 0.5 ? 15 : -15,
        }}

        transition={{ duration: 0.3 }}
      />
    </a>
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className='photo-container'>
        <div className='photo'>
          <img src={src} alt={alt} className={className}  />
        </div>
        <motion.p className='photo-description'>{alt}</motion.p>
      </div>
    </Modal>
  </>
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.string,
}

export default Image
