import React from 'react'

import founder1 from '../../assets/Hero/founder_1.png'
import founder2 from '../../assets/Hero/founder_2.png'
import founder3 from '../../assets/Hero/founder_3.png'

import './styles.scss'

const Founders = () => {
  return (
    <div className="Founders">
      <img className="Founders__photo" src={founder1} alt="founder"></img>
      <img className="Founders__photo" src={founder2} alt="founder"></img>
      <img className="Founders__photo" src={founder3} alt="founder"></img>
    </div>
  )
}

export default Founders
