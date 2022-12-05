import Navigation from '../Navigation/Navigation'
import s from './Header.module.scss'

const Header = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(#00000044, #00000044), url(https://pixabay.com/get/g10086a53aaa78b34f19f1aa4d3541098ad22871f781ad792cfd94c66d9e5c44e7514f398a3e3ec37fd9bd9ce710f9fb9_640.jpg) no-repeat',
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
