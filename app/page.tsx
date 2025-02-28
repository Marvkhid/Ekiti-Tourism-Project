import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Attractions from './Components/Attractions'
import UpcomingEvents from './Components/UpcomingEvents'

const page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Attractions />
      <UpcomingEvents />
    </div>
  )
}

export default page