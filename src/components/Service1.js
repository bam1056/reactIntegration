import React, { Component } from 'react'

export default class Service1 extends Component {
  static propTypes ={
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
              <h2 className='section-heading'>Connect to <strong>Your</strong> Campus Director :</h2>
              <p className='lead'>Connect to your specific campus director on Trello so that you can post comments directly about jobs you are interested in! Simply enter their @userName so the app knows who to reach out to. You can also enter their email address if they prefer to be contacted this way.</p>
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
