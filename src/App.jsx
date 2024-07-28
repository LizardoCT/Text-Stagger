import TextStagger from './components/TextStagger'

function App() {
  return (
    <>
      <div className='words_section'>
        <TextStagger text='hello' />
        <TextStagger text='world' />
        <TextStagger text='frontend' />
        <TextStagger text='developer' />
      </div>
    </>
  )
}

export default App
