import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Gallery from './views/galery'
import Info from './views/info'
import Contact from './views/contact'
import Home from './views/home'
import NotFound from './views/not-found'
import Hifi from './views/hifi'

const App = () => {
  return (
    <Router>
      <Switch>
          <Route component={Gallery} exact path="/galery" />
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
