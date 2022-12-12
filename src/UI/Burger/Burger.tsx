import s from './Burger.module.scss'
import { useState, useEffect } from 'react'

const Burger = ({ onToggle }: { onToggle: (isActive: boolean) => void }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleBurger = () => {
    setIsActive(is => !is)
  }

  useEffect(() => {
    onToggle(isActive)
  }, [isActive])

  return (
    <button
      onClick={toggleBurger}
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
