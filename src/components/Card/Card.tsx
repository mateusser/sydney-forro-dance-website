import React from 'react'

import { CardProps } from './types'

import './styles.scss'

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="Card">
      <div className="Card__title">{title}</div>
      <div className="Card__content">{content}</div>
    </div>
  )
}

export default Card
