import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Submenu from './components/Submenu'
import Contact from './contents/Contact'
import Home from './contents/Home'


export default function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Submenu/>
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
