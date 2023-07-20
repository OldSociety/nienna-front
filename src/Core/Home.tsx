import React from 'react'
import Header from './Header'
import HeroModule from '../Components/HeroModule'
import HeroModule2 from '../Components/HeroModule2'
import Footer from './Footer'

function Home() {
  return (
    <div className="main-container mx-auto">
      <Header />
      <HeroModule2 />
      <HeroModule />
      <Footer />
    </div>
  )
}

export default Home
