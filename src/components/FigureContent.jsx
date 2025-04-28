import { useMemo } from 'react';
import { motion } from 'motion/react';
import PropTypes from 'prop-types'
import FigureCard from './FigureCard'

const parentVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1, y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

function FigureContent({images, text}) {

  const cards = useMemo(() => text.cards.map((card, index) => ({
    image: images[`img${index + 1}`], header: card.header, content: card.content
  })), [images, text])

  return (
    <motion.section 
      className='section vertical-flex gap-30'
      initial="hidden"
      whileInView="show"
      variants={parentVariants}
      viewport={{ amount: 0.3 }}
    >
      <div className='header-container center'>
        <h1>{text.header}</h1>
      </div>
      <div className='horizontal-flex flex-center gap-10'>
        {
          cards.map((card, index) => (
            <FigureCard key={card.header + index} {...card} />
          ))
        }
      </div>
    </motion.section>
  )
}

FigureContent.propTypes = {
  images: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
}

export default FigureContent
