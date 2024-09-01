import React from 'react'

import { valueType } from './types'
import './styles.scss'

const Value = ({ icon, text }: valueType) => {
  return (
    <li className="Value">
      <span className="material-symbols-outlined Value__icon">{icon}</span>
      <h3 className="Value__text">{text}</h3>
    </li>
  )
}

export default Value
