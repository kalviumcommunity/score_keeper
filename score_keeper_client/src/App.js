import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home'
import GamePage from './components/GamePage'
import ErrorPage from './components/ErrorPage'
import NewGame from './components/NewGame'
import SemiResult from './components/SemiResult'
import Rules from './components/Rules'
import OldGame from './components/OldGame'
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gamepage' element={<GamePage/>}/>
        <Route path='/newgame' element={<NewGame/>}/>
        <Route path='/oldgames' element={<OldGame/>}/>
        <Route path='/semiresult' element={<SemiResult />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  )
}

export default App