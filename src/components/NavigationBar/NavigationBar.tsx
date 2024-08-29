import React from 'react'
import logo from '../../assets/SFD-logo.png'
import './styles.scss'

const NavigationBar = () => {
  return (
    <nav className="NavigationBar">
      <a className="NavigationBar__logo" href="/">
        <img
          className="NavigationBar__logoImage"
          src={logo}
          alt="Sydney Forró Dance Logo"
        />
        <h1 className="NavigationBar__logoTitle">Sydney Forró Dance</h1>
      </a>
      <ul className="NavigationBar__menu">
        <li className="NavigationBar__menuItem">
          <a href="/">Home</a>
        </li>
        <li className="NavigationBar__menuItem">
          <a href="/">Class</a>
        </li>
        <li className="NavigationBar__menuItem">
          <a href="/">Volunteers</a>
        </li>
        <li className="NavigationBar__menuItem--external">
          <a
            href="https://www.trybooking.com/events/landing/1279866"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Shop
              <span className="material-symbols-outlined">north_east</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationBar
