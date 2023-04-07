import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home'
import GamePage from './components/Game/GamePage'
import ErrorPage from './components/ErrorPage'
import NewGame from './components/Game/NewGameTOSet'
import SemiResult from './components/Game/SemiResult'
import Rules from './components/Rules'
import OldGame from './components/Game/OldGame'
import About from './components/About/About'
import Footer from './components/Footer'
// import NewGameEl from './components/Game/NewGameEleSet'
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gamepage' element={<GamePage/>}/>
        <Route path='/newgame21' element={<NewGame/>}/>
        <Route path='/oldgames' element={<OldGame/>}/>
        <Route path='/semiresult' element={<SemiResult />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<ErrorPage />}/>
        {/* <Route path='newgame11' element={<NewGameEl />}/> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App