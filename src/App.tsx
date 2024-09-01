import React from 'react'

import Hero from './components/Hero/Hero'
import NavigationBar from './components/NavigationBar/NavigationBar'

import './App.scss'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <NavigationBar />
      </header>
      <main className="App__main">
        <Hero />
        <section className="App__section">
          <h2 className="App__sectionTitle">Words from the Forró Family.</h2>
          <Testimonials />
        </section>
      </main>
    </div>
  )
}

export default App
