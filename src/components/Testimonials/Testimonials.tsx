import React from 'react'

import testimonials from './testimonials.json'

import './styles.scss'
import Card from '../Card/Card'

const Testimonials = () => {
  const testimonialsList = testimonials.map(({ name, quote }, idx) => (
    <Card content={quote} key={idx} title={name} />
  ))

  return (
    <div className="Testimonials">
      <div className="Testimonials__container">
        <div className="Testimonials__control" />{' '}
        {/** TODO: Add controls to carroussel list */}
        <div className="Testimonials__list">{testimonialsList}</div>
      </div>
    </div>
  )
}

export default Testimonials
