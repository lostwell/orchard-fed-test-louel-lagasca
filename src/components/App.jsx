import PropTypes from 'prop-types'
import FeaturedContent from './FeaturedContent'
import FigureContent from './FigureContent'
import '../styles/App.scss'

const renderContent = (content, index) => {
  const { type, ...otherProps } = content
  switch (type) {
    case 'featuredcontent':
      return <FeaturedContent key={type + index} {...otherProps} />
    case 'figurecontent':
      return <FigureContent key={type + index} {...otherProps} />
    default:
      return null
  }
}

function App({contentData}) {
  return (
    <article>
      { contentData && contentData.map((content, index) => (renderContent(content, index))) }
    </article>
  )
}

App.propTypes = {
  contentData: PropTypes.array.isRequired,
}

export default App
