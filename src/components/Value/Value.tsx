import React from 'react'

import { ValueProps } from './types'
import './styles.scss'

const Value = ({ icon, text }: ValueProps) => {
  return (
    <li className="Value">
      <span className="material-symbols-outlined Value__icon">{icon}</span>
      <h2 className="Value__text">{text}</h2>
    </li>
  )
}

export default Value
