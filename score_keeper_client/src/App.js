import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import GamePage from './components/Game/GamePage'
import ErrorPage from './components/ErrorPage'
import NewGame from './components/Game/NewGameTOSet'
import SemiResult from './components/Game/SemiResult'
import Rules from './components/Rules'
import OldGame from './components/Game/OldGame'
import About from './components/About/About'
import Footer from './components/Footer'
import ResponsiveAppBar from './components/NavBar'
import News from './components/News'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/Terms&Conditions'
import CookiePolicy from './components/CookiePolicy'
import AccessibilityPolicy from './components/AccessibilityPolicy'
import FAQ from './components/FAQ'
import UpComing from './components/UpComing'
import "./App.css"

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<GamePage/>}/>
        <Route path='/newgame21' element={<NewGame/>}/>
        <Route path='/oldgames' element={<OldGame/>}/>
        <Route path='/semiresult' element={<SemiResult />}/>
        <Route path='/rules' element={<Rules />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy />}/>
        <Route path='/t&c' element={<TermsConditions />}/>
        <Route path='/cookiepolicy' element={<CookiePolicy />}/>
        <Route path='/accessibilitypolicy' element={<AccessibilityPolicy />}/>
        <Route path='/faq' element={<FAQ />}/>
        <Route path='/shop' element={<UpComing />}/>
        <Route path='*' element={<ErrorPage />}/>

      </Routes>
      <Footer />
    </>
  )
}

export default App