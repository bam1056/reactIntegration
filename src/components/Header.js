import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render () {
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
              <a className='navbar-brand topnav' href='#'>Welcome</a>
            </div>
            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#services'>Services</a>
                </li>
                <li>
                  <a href='#contact'>Contact</a>
                </li>
                <li>
                  <Link to='/config'>Configure</Link>
                </li>
                <li>
                  <Link to='/jobs'>JobSearch</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
