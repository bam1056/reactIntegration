import React, { Component } from 'react'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

export default class Configure extends Component {
  render () {
    return (
      <div>
        <PageHeader navLinks={[{path: '/', name: 'HOME'}, {path: '/jobs', name: 'JOB SEARCH'}]} />
        <PageFooter />
      </div>
    )
  }
}
