import s from './Logo.module.scss'
import logo from '../../../assets/logo_icf-warsaw-large.png'

const Logo = ({ className }: { className?: string }) => {
  return (
    <a className={`${s.logo} ${className}`} href='/home'>
      <img
        className={s['logo--img']}
        src={logo}
        alt='International Christian Fellowship logo'
      />
    </a>
  )
}

export default Logo
