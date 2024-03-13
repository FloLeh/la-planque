import './App.css'
import { Header } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import { Missions, Home, Projets, Collectif, Contact, SingleProjectPage } from './pages'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FixedBackground } from './components'

class App extends Component {
  componentDidMount() {
    AOS.init()
  }
  
  render () {
    return (
      <div className="App">
        <FixedBackground/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={(
              <React.Fragment>
                <div className="header-bg hide_mobile"></div>
                <Header/>
                <Home/>
                <Missions/>
                <Projets/>
                <Collectif/>
                <Contact/>
              </React.Fragment>
            )}/>
            <Route exact path='/projets/:cover/:projectTitle' component={SingleProjectPage}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
