import { useClientWidth } from '../../hooks/useClientWidth'
import Navigation from '../Navigation/Navigation'
import s from './Header.module.scss'

import cat from '../../assets/cat-6664412_640.jpg'
import bigCat from '../../assets/cat-4218424_1920.jpg'
import logo from '../../assets/logo_icf-warsaw-large.png'

const Header = () => {
  const {width} = useClientWidth()
  return (
    <div
      style={{
        backgroundImage: `url(${width < 700 ? cat : bigCat})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className={s.header}>
      <div className='shadow'></div>
      <a className={s.header__logo} href='/home'>
        <img
          className={s['header__logo--img']}
          src={logo}
          alt='International Christian Fellowship logo'
        />
      </a>
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
