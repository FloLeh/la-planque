import './App.css'
import { Header } from './components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './pages/Home/Home'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          {/* <ScrollToTop/> */}
          <Header/>
          <Switch>
            <Route path='/' exact component={() => <Home/>}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
