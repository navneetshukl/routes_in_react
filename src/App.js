import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Basic from './routes/Basic';
import Contact from './routes/Contact';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Basic/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
