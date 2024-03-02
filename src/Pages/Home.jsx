import React from 'react'
import Top from '../Components/Global Components/Top'
import Header from '../Components/Global Components/Header'
import HeroSection from '../Components/Home Components/HeroSection'

const Home = () => {
  return (
    <div>
     {/* <Top/> */}
     <Header/>
     <main>
      <HeroSection/>
     </main>

    </div>
  )
}

export default Home