import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Burger from './components/Burger'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './contents/Contact'
import Home from './contents/Home'


export default function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Burger/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/doc">
        <Contact/>
      </Route>
      <Footer/>
    </div>
    </Router>
  )
}
