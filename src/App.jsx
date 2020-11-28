/* eslint-disable no-unused-vars */
import './App.css'
import { Header, ScrollToTop } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import { Missions, Home, Projets, Collectif, Contact } from './pages'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <ScrollToTop/>
          <Header/>
          <Home/>
          <Missions/>
          <Projets/>
          <Collectif/>
          <Contact/>
          {/* <Switch>
            <Route path='/' exact component={() => <Home/>}/>
            <Route path='/missions' component={() => <Missions/>}/>
          </Switch> */}
        </Router>
      </div>
    )
  }
}

export default App
