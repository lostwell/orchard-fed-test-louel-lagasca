import PropTypes from 'prop-types'
import { motion } from 'motion/react';
import Image from './Image'

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

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function FeaturedContent({ images, text }) {
  return (
    <motion.section
      className='section horizontal-flex gap-30'
      initial="hidden"
      whileInView="show"
      variants={parentVariants}
      viewport={{ amount: 0.3 }}
    >
      <motion.div className='horizontal-flex gap-10 gallery' variants={childVariants} >
        <Image {...images.img1}/>
        <div className='vertical-flex gap-10'>
          <Image {...images.img2}/>
          <Image {...images.img3}/>
        </div>
      </motion.div>
      <div className='vertical-flex vertical-content gap-30'>
        <motion.div className='header-container' variants={childVariants}>
          <h1>{text.header}</h1>
        </motion.div>
        <motion.p variants={childVariants}>{text.content}</motion.p>
        <motion.div variants={childVariants}>
          <h3>{text.highlightHeader}</h3>
          <mark>{text.highlight}</mark>
        </motion.div>
      </div>
    </motion.section >
  )
}

FeaturedContent.propTypes = {
  images: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
}

export default FeaturedContent
