import React, { Component } from 'react'
// import ipad from '../img/ipad.png'
// import dog from '../img/dog.png'
// import phones from '../img/phones.png'
import directors from '../img/campusDirectors.jpg'
import wordList from '../img/wordList.jpg'
import sampleMap from '../img/sampleMap.jpg'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'

export default class Services extends Component {
  render () {
    return (
      <div>
        <a name='services' />
        <Service1 image={directors} />
        <Service2 image={wordList} />
        <Service3 image={sampleMap} />
      </div>
    )
  }
}
