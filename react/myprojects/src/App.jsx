import { useState } from 'react'
import Cards from './Components/ContactCard'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Card from './Components/ProductCard'
import Student from './Components/Student'
import Shopingcart from './Components/Shopingcart'
import Employee from './Components/Employee'

import PDFGenerator from './component/PdfData';

function App() {
  const [count, setCount] = useState(0)
  return (
    <PDFGenerator/>
  )
}

export default App
