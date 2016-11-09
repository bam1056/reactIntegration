import React, { Component } from 'react'

export default class JobSearchService extends Component {
  static propTypes ={
    image: React.PropTypes.string,
    getJobs: React.PropTypes.func
  }

  render () {
    return (
      <div className='content-section-a'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-sm-6'>
              <hr className='section-heading-spacer' />
              <div className='clearfix' />
              <h2 className='section-heading'>Select Your Options to the Right:</h2>
              <p className='lead'>Choose the city and keywords that you want to search for in your area. Once you have selected, hit 'Get Jobs' and watch the potential jobs come pouring in! Then, you can apply for the job, email your CD or post the job to your Trello board that you selected in settings!</p>
            </div>
            <div className='col-lg-5 col-lg-offset-2 col-sm-6'>
              <div className='Main-Button-Container'>
                <div className='dropdown'>
                  <label>City: </label>
                  <select id='city' name='city'>
                    <option value='Saint Petersburg, FL'>St.Pete</option>
                    <option value='Tampa, FL'>Tampa</option>
                    <option value='Clearwater, FL'>Clearwater</option>
                    <option value='Orlando, FL'>Orlando</option>
                    <option value='New York, NY'>New York</option>
                  </select>
                </div>
                <div>
                  <label>Keywords: </label>
                  <select id='keyword' name='keyword'>
                    <option value='Javascript'>Javascript</option>
                    <option value='Ruby'>Ruby</option>
                    <option value='FrontEnd'>Front End</option>
                    <option value='Junior'>Junior</option>
                  </select>
                </div>
                <button className='jobs'
                  onClick={this.props.getJobs}>
                  Get Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
