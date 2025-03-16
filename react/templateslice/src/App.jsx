import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './Components/About'
import Courses from './Components/Courses'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Courses/>
    </>
  )
}

export default App
