/* eslint-disable react/prop-types */
import { useEffect, useRef, useCallback } from 'react'
import './textStagger.css'

const TextStagger = ({ text, size }) => {
  const containerRef = useRef(null)
  const textRollingRefs = useRef([])

  // values to modify depending on the font-size
  const translateYValue = `-${size}px` // offset value for animation
  const height = `${size}px` // height of each word's container
  const lineHeight = `${size}px` // height of each line

  const handleMouseEvent = useCallback(
    (isMouseOver, rollingElements) => {
      rollingElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.transform = isMouseOver
            ? `translateY(${translateYValue})`
            : 'translateY(0)'
        }, index * 50) // 50ms = animation time between each letter
      })
    },
    [translateYValue]
  )

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
          style={{ height, lineHeight }}
          ref={(el) => (textRollingRefs.current[index] = el)}
        >
          <span>{letter}</span>
          <span>{letter}</span>
        </div>
      ))}
    </div>
  )
}

export default TextStagger
