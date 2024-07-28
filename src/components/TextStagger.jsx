/* eslint-disable react/prop-types */
import { useEffect, useRef, useCallback } from 'react'
import './textStagger.css'

const TextStagger = ({ text, size }) => {
  const containerRef = useRef(null)
  const textRollingRefs = useRef([])

  // valores a modificar dependiendo del font-size
  const translateYValue = `-${size}px` // valor de desplazamiento para la animación
  const height = `${size}px` // altura del contenedor de cada palabra
  const lineHeight = `${size}px` // altura de cada linea

  const handleMouseEvent = useCallback(
    (isMouseOver, rollingElements) => {
      rollingElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.transform = isMouseOver
            ? `translateY(${translateYValue})`
            : 'translateY(0)'
        }, index * 50) // 50ms = tiempo de animacion entre cada letra
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
