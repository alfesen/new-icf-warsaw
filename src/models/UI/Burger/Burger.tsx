import s from './Burger.module.scss'
import { useState } from 'react'

const Burger = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <button
      onClick={() => setIsActive(is => !is)}
      className={`${s.hamburger} ${s['hamburger--spring']} ${
        isActive ? s['is-active'] : ''
      }`}>
      <span className={s['hamburger-box']}>
        <span className={s['hamburger-inner']}></span>
      </span>
    </button>
  )
}

export default Burger
