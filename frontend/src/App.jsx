import React from 'react'
import NavBar from './paginas/components/NavBar'
import HeroSection from './paginas/components/HeroSection'



function App(){
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
      </div>
    </div>
  )
}

export default App