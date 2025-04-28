import { useMemo } from 'react';
import PropTypes from 'prop-types'
import FigureCard from './FigureCard'

function FigureContent({images, text}) {

  const cards = useMemo(() => text.cards.map((card, index) => ({
    image: images[`img${index + 1}`], header: card.header, content: card.content
  })), [images, text])

  return (
    <section className='section vertical-flex gap-30'>
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
    </section>
  )
}

FigureContent.propTypes = {
  images: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
}

export default FigureContent
