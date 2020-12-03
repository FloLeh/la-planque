import './App.css'
import { Header, ScrollToTop } from './components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { Missions, Home, Projets, Collectif, Contact, SingleProjectPage } from './pages'
import $ from 'jquery'

class App extends Component {

  resizeBackground() {
    $('body').height($(window).height() + 60);
  }

  componentDidMount() {
    $(window).on('resize', () => this.resizeBackground())
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
