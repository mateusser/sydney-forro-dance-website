import React from 'react'

import Founders from '../Founders/Founders'
import Value from '../Value/Value'
import { ValueProps } from '../Value/types'

import values from './values.json'
import './styles.scss'

const Hero = () => {
  const valuesComponents = values.map(({ icon, text }: ValueProps, idx) => (
    <Value icon={icon} key={idx} text={text}></Value>
  ))

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
      <div className="Hero__info">
        <p className="Hero__founders">
          <span>Created by</span>
          <Founders />
          <span>Three Forró Lovers</span>
        </p>
        <ul className="Hero__values">{valuesComponents}</ul>
      </div>
    </section>
  )
}

export default Hero
