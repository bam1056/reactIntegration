import React, { Component } from 'react'

export default class Contact extends Component {
  render () {
    return (
      <div>
        <a name='contact' />
        <div className='banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <h2>Connect With the Creator of this Site:</h2>
              </div>
              <div className='col-lg-6'>
                <ul className='list-inline banner-social-buttons'>
                  <li>
                    <a href='https://twitter.com/brett__macy' className='btn btn-default btn-lg' target='_blank'><i className='fa fa-twitter fa-fw' /> <span className='network-name'>Twitter</span></a>
                  </li>
                  <li>
                    <a href='https://github.com/bam1056' className='btn btn-default btn-lg' target='_blank'><i className='fa fa-github fa-fw' /><span className='network-name'>Github</span></a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/brett-macy-57925a116' target='_blank' className='btn btn-default btn-lg'><i className='fa fa-linkedin fa-fw' /><span className='network-name'>Linkedin</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
