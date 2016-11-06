import React, { Component } from 'react'
import Header from './Header'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

export default class Landing extends Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>)
  }
}
