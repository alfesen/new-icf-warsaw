import { useState, useEffect } from 'react'
import s from './Header.module.scss'

import Logo from '../../UI/Logo/Logo'
import Navigation from '../Navigation/Navigation'
import MainHeading from './MainHeading/MainHeading'
import Shadow from '../../UI/Shadow/Shadow'

import welcome from '../../assets/images/headers/welcome-lg.jpg'
import sermon from '../../assets/images/headers/sermons.jpg'
import bigCat from '../../assets/cat-4218424_1920.jpg'

const Header = () => {
  const [headerImage, setHeaderImage] = useState('')

  useEffect(() => {
    switch (window.location.pathname) {
      case '/about/welcome-location':
        setHeaderImage(welcome)
        break
      case '/sermons':
        setHeaderImage(sermon)
        break
      default:
        setHeaderImage(bigCat)
    }
  })

  return (
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
      className={s.header}>
      <Shadow />
      <Logo className={s.header__logo} />
      <Navigation />
      <MainHeading />
    </div>
  )
}

export default Header
