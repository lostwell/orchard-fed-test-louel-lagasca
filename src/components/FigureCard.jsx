import PropTypes from 'prop-types'
import Image from './Image'

function FigureCard({image, header, content}) {
  return (
    <section className='vertical-flex gap-30'>
      <Image {...image}/>
      <div className='vertical-flex gap-10'>
        <h2>{header}</h2>
        <p className='description text-center center'>
          {content}
        </p>
      </div>
    </section>
  )
}

FigureCard.propTypes = {
  image: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default FigureCard