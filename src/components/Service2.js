import React, { Component } from 'react'

export default class Service2 extends Component {
  static propTypes = {
    image: React.PropTypes.string
  }

  render () {
    return (
      <div className='content-section-b'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6'>
              <hr className='section-heading-spacer' />
              <div className='clearfix' />
              <h2 className='section-heading'>Choose your Keywords<br /></h2>
              <p className='lead'>Simply select from a list of keywords specific to your area of study to pull jobs in the area related to your chosen specialty.</p>
            </div>
            <div className='col-lg-5 col-sm-pull-6  col-sm-6'>
              <img className='img-responsive' src={this.props.image} alt='' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
