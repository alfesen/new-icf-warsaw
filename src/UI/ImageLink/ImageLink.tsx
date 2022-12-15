import s from './ImageLink.module.scss'
import { Link } from 'react-router-dom'
import { formatLink } from '../../helpers/formatLink'

type Props = {
  className?: string
  image: string
  text: string
}

const ImageLink = (props: Props) => {
  const { className, image, text } = props

  const link = formatLink(text)

  return (
    <Link to={`/${link}`} className={`${s.link} ${className}`}>
      <div className={s.link__img}>
        <img src={image} alt='' />
        <div className={s.link__overlay}>
          <h3 className={s.link__text}>{text}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ImageLink
