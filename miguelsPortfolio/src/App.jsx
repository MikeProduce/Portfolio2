import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { LandingPage } from './components/Landing'
import { TechStack } from './components/TechStack'
import { Projects } from './components/Projects'

function App() {

  return (
    <div className="App">
     <NavBar />
      <LandingPage />
        <TechStack />
      <Projects />
    </div>
  )
}

export default App
