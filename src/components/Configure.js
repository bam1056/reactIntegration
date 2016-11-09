import React, { Component } from 'react'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

export default class Configure extends Component {
  render () {
    return (
      <div>
        <PageHeader page='Settings' navLinks={[{path: '/', name: 'Home'}, {path: '/jobs', name: 'Job Search'}]} />
        <PageFooter />
      </div>
    )
  }
}
