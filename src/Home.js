import React from 'react'
import Countdown from './components/Countdown'
import Hero from './components/Hero'
import Location from './components/Location'

import Rsvp from './components/Rsvp'
import Us from './components/Us'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <a href='#rsvp' className='btn rsvp-btn'>
        RSVP
      </a>
      <Hero />
      <Countdown />
      <Us />
      <Location />
      <Rsvp />
    </div>
  )
}

export default Home
