import React from 'react'
import Hero from './Components/Hero'
import Attractions from './Components/Attractions'
import UpcomingEvents from './Components/UpcomingEvents'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Hero />
      <Attractions />
      <UpcomingEvents />
      <Footer />
    </div>
  )
}

export default page