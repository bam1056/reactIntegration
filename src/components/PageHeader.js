import React, { Component } from 'react'
import { Link } from 'react-router'

export default class PageHeader extends Component {
  render () {
    const { navLinks } = this.props
    const links =  navLinks === undefined ? <li><Link to='/'>HOME</Link></li> : navLinks.map(link => {
      return <li key={link.name}><Link to={link.path}>{link.name}</Link></li>
    })
    return (
      <div>
        <nav className='navbar navbar-default navbar-fixed-top topnav' role='navigation'>
          <div className='container topnav'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
            </div>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav navbar-right'>
                { links }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
