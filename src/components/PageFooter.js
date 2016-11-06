import React, { Component } from 'react'
import { Link } from 'react-router'

export default class PageFooter extends Component {
  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <footer>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <ul className='list-inline'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                </ul>
                <p className='copyright text-muted small'>Copyright &copy; SuncoastCodeCollective, LLC 2016. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
