import PropTypes from 'prop-types'
import Image from './Image'

function FeaturedContent({ images, text }) {
  return (
    <section className='section horizontal-flex gap-30'>
      <div className='horizontal-flex gap-10 gallery'>
        <Image {...images.img1}/>
        <div className='vertical-flex gap-10'>
          <Image {...images.img2}/>
          <Image {...images.img3}/>
        </div>
      </div>
      <div className='vertical-flex vertical-content gap-30'>
        <div className='header-container'>
          <h1>{text.header}</h1>
        </div>
        <p>{text.content}</p>
        <div>
          <h3>{text.highlightHeader}</h3>
          <mark>{text.highlight}</mark>
        </div>
      </div>
    </section>
  )
}

FeaturedContent.propTypes = {
  images: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
}

export default FeaturedContent
