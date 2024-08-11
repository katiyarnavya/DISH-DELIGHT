import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Qualities from '../Components/Qualities'
import Menu from '../Components/Menu'
import WhoAReWe from '../Components/WhoAReWe'
import Team from '../Components/Team'
import Reservation from '../Components/Reservation'
import Footer from '../Components/Footer'

const Home = ({ data }) => {
  return (
    <div>
      <HeroSection />
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAReWe/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default Home
