import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import GamePage from './components/GamePage'
import ErrorPage from './components/ErrorPage'
import NewGame from './components/NewGame'
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/gamepage' element={<GamePage/>}/>
        <Route path='/newgame' element={<NewGame/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </>
  )
}

export default App