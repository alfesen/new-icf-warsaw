import s from './Footer.module.scss'
import IconLink from '../../UI/IconLink/IconLink'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {
  const iconLinks = [
    { icon: faEnvelope, url: 'mailto:icf@icfwarsaw.org' },
    { icon: faInstagramSquare, url: 'https://www.instagram.com/icf_warsaw_/' },
    { icon: faFacebookSquare, url: 'https://www.facebook.com/ICFWarsaw/' },
  ]

  const renderIcons = iconLinks.map(link => {
    return (
      <IconLink key={iconLinks.indexOf(link)} icon={link.icon} url={link.url} />
    )
  })

  return (
    <footer className={s.footer}>
      <div className='container'>
        <Fade>
          <div className={s.footer__social}>{renderIcons}</div>
        </Fade>
      </div>
    </footer>
  )
}

export default Footer
