import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Landing from './components/Landing'
import Configure from './components/Configure'
import JobSearch from './components/JobSearch'
import { Router, Route, browserHistory } from 'react-router'
import './styles/bootstrap.css'
import './styles/landing-page.css'

const router = (
  <Router history={browserHistory} >
    <Route component={App}>
      <Route path='/' component={Landing} />
      <Route path='/config' component={Configure} />
      <Route path='/jobs' component={JobSearch} />
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('root'))
