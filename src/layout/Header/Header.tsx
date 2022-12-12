import { useClientWidth } from '../../hooks/useClientWidth'
import Navigation from '../Navigation/Navigation'
import s from './Header.module.scss'

import cat from '../../assets/cat-6664412_640.jpg'
import bigCat from '../../assets/cat-4218424_1920.jpg'
import Logo from '../../UI/Logo/Logo'
import MainHeading from './MainHeading/MainHeading'

const Header = () => {
  const { width } = useClientWidth()
  return (
    <div
      style={{
        backgroundImage: `url(${width < 700 ? cat : bigCat})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
      className={s.header}>
      <div className='shadow'></div>
      <Logo className={s.header__logo} />
      <Navigation />
      <MainHeading />
    </div>
  )
}

export default Header
