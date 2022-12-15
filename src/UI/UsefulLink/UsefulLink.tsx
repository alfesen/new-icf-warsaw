import s from './UsefulLink.module.scss'

type Props = {
  image: string
  text: string
  url: string
}

const UsefulLink = (props: Props) => {
  const { image, text, url } = props

  return (
    <div className={s.link}>
      <div className={s.link__text}>{text}</div>
      <a href={url}>
        <img className={s.link__img} src={image} alt={`${text} image link`} />
      </a>
    </div>
  )
}

export default UsefulLink
