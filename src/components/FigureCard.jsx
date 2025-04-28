import PropTypes from 'prop-types'
import Image from './Image'
import { motion } from 'motion/react';

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function FigureCard({image, header, content}) {
  return (
    <motion.section 
      className='vertical-flex gap-30'
      variants={childVariants}
    >
      <Image {...image}/>
      <div className='vertical-flex gap-10'>
        <h2>{header}</h2>
        <p className='description text-center center'>
          {content}
        </p>
      </div>
    </motion.section>
  )
}

FigureCard.propTypes = {
  image: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default FigureCard