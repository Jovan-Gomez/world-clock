import Title from './components/Title'
import WorldClock from './components/WorldClock'

function App() {
  return (
    <div className='bg-[#F49C76] h-screen flex justify-center items-center'>
      <div className='w-full max-w-[65rem] mx-auto'>
        <Title>WorldtimeLite</Title>
        <WorldClock />
      </div>
    </div>
  )
}

export default App
