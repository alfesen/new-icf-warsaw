
import Navigation from '../Navigation/Navigation'
import s from './Header.module.scss'

import bigCat from '../../assets/cat-4218424_1920.jpg'
import Logo from '../../UI/Logo/Logo'
import MainHeading from './MainHeading/MainHeading'
import Shadow from '../../UI/Shadow/Shadow'

const Header = ({image}: {image?: string}) => {
  
  return (
    <div
      style={{
        backgroundImage: `url(${image ? image : bigCat})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
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
