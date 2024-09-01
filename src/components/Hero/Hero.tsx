import React from 'react'

import './styles.scss'

const Hero = () => {
  return (
    <section className="Hero">
      <h2 className="Hero__title">From Passion to community</h2>
      <div className="Hero__cover">
        <div className="Hero__buttonContainer">
          <a
            className="Hero__button"
            href="https://www.trybooking.com/events/landing/1279866"
            target="_blank"
            rel="noreferrer"
          >
            Book your spot now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
