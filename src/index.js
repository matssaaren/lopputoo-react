import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Gallery from './pages/Gallery'
import Info from './pages/Info'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Hifi from './pages/Hifi'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Gallery} exact path="/gallery" />
        <Route component={Info} exact path="/info" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Hifi} exact path="/hifi" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
