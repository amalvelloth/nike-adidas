import React from 'react'
import './App.css'
import Hero from './components/Hero'
import NikeHome from './components/nike/nikeHOME'
import AdidasHome from './components/adidas/adidasHOME'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/nike-home' element={<NikeHome/>} />
          <Route path='/adidas-home' element={<AdidasHome/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
