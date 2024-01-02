import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import GameComponent1 from './components/GameComponent1'
import GameComponent2 from './components/GameComponent2'
import GameComponent3 from './components/GameComponent3'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play1' element={<GameComponent1 />} />
        <Route path='/play2' element={<GameComponent2 />} />
        <Route path='/play3' element={<GameComponent3 />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App