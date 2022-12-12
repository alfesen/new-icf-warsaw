import s from './ImageLink.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  image: string
  text?: string
}

const ImageLink = (props: Props) => {
  const { className, image, text } = props
  return (
    <Link to='#' className={`${s.link} ${className}`}>
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
