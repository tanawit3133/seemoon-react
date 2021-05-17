import React from 'react'
import Burger from './components/Burger'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

export default function App() {
  return (
    <div>
      <Header/>
      <Burger/>
      <Home/>
      <Footer/>
    </div>
  )
}
