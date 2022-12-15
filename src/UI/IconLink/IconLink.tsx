import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import s from './IconLink.module.scss'

type Props = {
  className?: string
  url: string
  icon: IconDefinition
}

const IconLink = (props: Props) => {
  const { icon, className } = props

  return (
    <a className={s.link} target='_blank' href='mailto:icf@icfwarsaw.org'>
      <FontAwesomeIcon className={`${s.link__icon} ${className}`} icon={icon} />
    </a>
  )
}

export default IconLink
