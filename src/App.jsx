import './App.css'
import { Header, ScrollToTop } from './components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { Missions, Home, Projets, Collectif, Contact, SingleProjectPage } from './pages'
import AOS from 'aos'
import 'aos/dist/aos.css'

class App extends Component {
  componentDidMount() {
    AOS.init()
  }
  
  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/' exact render={() => (
              <React.Fragment>
                <ScrollToTop/>
                <Header/>
                <Home/>
                <Missions/>
                <Projets/>
                <Collectif/>
                <Contact/>
              </React.Fragment>
            )}/>
            <Route exact path='/projets/:projectTitle' component={SingleProjectPage}/>
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
