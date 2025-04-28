import PropTypes from 'prop-types'

function Image({src, alt, style}) {
  return (
    <img src={src} alt={alt} style={style} />
  )
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
