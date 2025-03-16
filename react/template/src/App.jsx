import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './components/About'
import Courses from './components/Courses'
import Index from './components/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/courses" element={<Courses/>}/>          
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
