import React from 'react'
import Hero from './Components/Hero'
import Attractions from './Components/Attractions'
import UpcomingEvents from './Components/UpcomingEvents'
import Footer from '@/components/Footer'
import HiddenGems from './Components/HiddenGems'
import TravelGuide from './Components/TravelGuide'
import CountdownTimer from './Components/CountdownTimer'


const events = [
  { eventName: "Udiroko Festival", eventDate: "2025-08-25 00:00:00" },
  { eventName: "Ekiti Cultural Day", eventDate: "2025-10-10 00:00:00" },
  { eventName: "New Yam Festival", eventDate: "2025-07-15 00:00:00" },
];

const page = () => {
  return (
    <div>
      <Hero />
      <Attractions />
      <HiddenGems />
      <UpcomingEvents />
      <CountdownTimer events={events} />
      <TravelGuide />
      <Footer />
    </div>
  )
}

export default page