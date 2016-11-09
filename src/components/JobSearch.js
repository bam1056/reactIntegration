import React, { Component } from 'react'
import '../styles/landing-page.css'
import '../styles/jobsearch.sass'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

class JobSearch extends Component {
  constructor () {
    super()
    this.state = {
      jobs: [],
      currentCardId: '',
      currentCity: '',
      currentKeyWord: ''
    }
  }

  getJobs = () => {
    this.authorize()
    const city = document.getElementById('city')
    const text = document.getElementById('keyword')
    window.fetch(`http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=${text.value}&city=${city.value}&pgcnt=150`)
    .then(res => res.json())
    .then(json => this.setState({jobs: json.resultItemList}))
  }

  authorize = () => {
    console.log('clicked')
    Trello.authorize({
      interactive: true,
      type: 'popup',
      expiration: 'never',
      name: 'surveyrequest',
      persist: 'true',
      scope: {read: true, write: true}
    })
  }

  makeTrelloCard = (job) => {
    var thisUrl = encodeURI(job.detailUrl)
    // let cardId = ''
    // const comment = '@toniwarren: Please reach out to me about this position!'
    Trello.post('cards', { name: `${job.company}`, desc: job.jobTitle, idList: '57c09a003c39978d6aaf12e8', urlSource: thisUrl })
    .then(res => this.setState({currentCardId: res.id}, () => {
      // cardId = this.state.currentCardId
      // Trello.post(`cards/${cardId}/actions/comments`, {text: comment})
    }))
  }

  render () {
    const { jobs } = this.state
    const jobList = jobs.map((job, i) => {
      const subject = 'I Want This Job!!!'
      const body = `Hey Toni! I would really like some help getting this one! Link to my job: ${job.detailUrl}`
      return <div className='CardContainer' key={i}>
        <ul>
          <li>{job.company}</li>
          <li>{job.jobTitle}</li>
          <li>{job.location}</li>
          <li>
            <a
              href={job.detailUrl}
              target='_blank'>
              Apply
            </a>
            <a
              href={`mailto:antoinette.warren@gmail.com?subject=${subject}&body=${body}`}>
              Email C.D.
            </a>
            <button
              className='jobs'
              onClick={() => this.makeTrelloCard(job)}>
              Post To Trello
            </button>
          </li>
        </ul>
      </div>
    })
    return <div>
      <PageHeader navLinks={[{path: '/', name: 'Home'}, {path: '/config', name: 'Settings'}]} />
      <div className='job intro-header'>
        <div className='job container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='intro-message'>
                <h1>Job Search</h1>
                <hr className='intro-divider' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a name='jobSearch' />
      <div className='Main-Button-Container'>
        {/* <button className='trelllo'
          onClick={this.authorize}>
          Authorize Trello
        </button> */}
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
          onClick={this.getJobs}>
          Get Jobs
        </button>
      </div>
      <div className="cards">
        {jobList}
      </div>
      <PageFooter />
    </div>
  }
}

export default JobSearch
