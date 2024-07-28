import TextStagger from './TextStagger'
import img from '../assets/1.png'
import img2 from '../assets/2.png'
import icon from '../assets/icon.svg'
import icon2 from '../assets/icon2.png'

const Hero = () => {
  return (
    <div className='header_container'>
      <section className='nav_section'>
        <div>
          <span className='offers'>% offers</span>
        </div>
        <h2 className='logo'>Wellness☆official</h2>
        <div>
          <TextStagger text='cart' size={20} />
          <img src={icon} className='icon' />
        </div>
      </section>
      <section className='hero_section'>
        <div className='hero_text'>
          <TextStagger text='the best' size={85} />
          <img src={img} />
          <TextStagger text='error' size={85} />
        </div>
        <div>
          <TextStagger text='message is ' size={85} />
        </div>
        <div className='hero_text'>
          <TextStagger text='the' size={85} />
          <img src={img2} />
          <TextStagger text='one that' size={85} />
        </div>
        <div>
          <TextStagger text='never shows up' size={85} />
        </div>
      </section>
      <section className='footer_section'>
        <ul>
          <li>
            <img src={icon2} />
            <TextStagger text='Design' size={25} />
          </li>
          <li>
            <img src={icon2} />
            <TextStagger text='Frontend' size={25} />
          </li>
          <li>
            <img src={icon2} />
            <TextStagger text='Backend' size={25} />
          </li>
          <li>
            <img src={icon2} />
            <TextStagger text='Seo' size={25} />
          </li>
          <li>
            <img src={icon2} />
            <TextStagger text='Development' size={25} />
          </li>
          <li>
            <img src={icon2} />
            <TextStagger text='Software' size={25} />
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Hero
