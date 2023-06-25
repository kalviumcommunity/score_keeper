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
import AllProducts from './components/Shop/AllProducts'
import Shuttels from './components/Shop/Shuttels'
import Racquets from './components/Shop/Racquets'
import Grips from './components/Shop/Grips'
import Shoes from './components/Shop/Shoes'
import "./App.css"

function App() {
  return (
    <>
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
        <Route path='/shop' element={<AllProducts />}/>
        <Route path='/shop/shuttels' element={<Shuttels />}/>
        <Route path='/shop/racquets' element={<Racquets />}/>
        <Route path='/shop/grips' element={<Grips />}/>
        <Route path='/shop/shoes' element={<Shoes />}/>
        <Route path='*' element={<ErrorPage />}/>

      </Routes>
      <Footer />
    </>
  )
}

export default App