import React, { Component } from 'react'

export default class Service3 extends Component {
  static propTypes = {
    image: React.PropTypes.string
  }

  render () {
    return (
      <div className='content-section-a'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-sm-6'>
              <hr className='section-heading-spacer' />
              <div className='clearfix' />
              <h2 className='section-heading'>Choose Your Desired Location<br /></h2>
              <p className='lead'>Pick from a list of tech-heavy cities to search for available jobs with your keywords. All the searches are pulled from <a href='http://dice.com' target='_blank'>Dice.com</a>. We are working hard to bring you additional search tools from <a href='http://indeed.com' target='_blank'>Indeed.com</a> as well.</p>
            </div>
            <div className='col-lg-5 col-lg-offset-2 col-sm-6'>
              <img className='img-responsive' src={this.props.image} alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
