import Navigation from '../Navigation/Navigation'
import s from './Header.module.scss'

import cat from '../../assets/cat-6664412_640.jpg'

const Header = () => {
  return (
    <div
      style={{
        background: `linear-gradient(#00000044, #00000044), url(${cat}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className={s.header}>
      <Navigation />
      <h1 className={s.header__heading}>
        <span className={s['header__heading--primary']}>
          WELCOME TO ICF WARSAW
        </span>
        <span className={s['header__heading--secondary']}>
          Find your way...
        </span>
      </h1>
    </div>
  )
}

export default Header
