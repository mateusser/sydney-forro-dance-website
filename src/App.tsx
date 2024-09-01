import React from 'react'

import Hero from './components/Hero/Hero'
import NavigationBar from './components/NavigationBar/NavigationBar'

import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <NavigationBar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
