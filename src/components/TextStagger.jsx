import { useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import './textStagger.css'

const TextStagger = ({ text }) => {
  const containerRef = useRef(null)
  const textRollingRefs = useRef([])

  const handleMouseEvent = useCallback((isMouseOver, rollingElements) => {
    rollingElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.transform = isMouseOver
          ? 'translateY(-65px)' // altura negativa de animacion de cada texto
          : 'translateY(0)'
      }, index * 50) // 50ms = tiempo entre cada animacion
    })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const rollingElements = textRollingRefs.current

    const handleMouseOver = () => handleMouseEvent(true, rollingElements)
    const handleMouseOut = () => handleMouseEvent(false, rollingElements)

    container.addEventListener('mouseover', handleMouseOver)
    container.addEventListener('mouseout', handleMouseOut)

    return () => {
      container.removeEventListener('mouseover', handleMouseOver)
      container.removeEventListener('mouseout', handleMouseOut)
    }
  }, [handleMouseEvent])

  return (
    <div className='word_container' ref={containerRef}>
      {text.split('').map((letter, index) => (
        <div
          key={index}
          className='text_rolling'
          ref={(el) => (textRollingRefs.current[index] = el)}
        >
          <span>{letter}</span>
          <span>{letter}</span>
        </div>
      ))}
    </div>
  )
}

TextStagger.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextStagger
