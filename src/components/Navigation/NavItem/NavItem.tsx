import { Fragment, useState } from 'react'
import s from './NavItem.module.scss'

type Props = {
  title: string
  links?: string[]
}

const NavItem = (props: Props) => {
  const { title, links } = props

  const [drop, setDrop] = useState(false)

  const isDropped = drop ? '-' : `+`
  const titleQuery = title.replace(' ', '').toLowerCase()

  const dropdownLinks = drop && (
    <div className={s.item__collection}>
      {links &&
        links.map(link => {
          const linkQuery = link.replace(' ', '').toLowerCase()
          return (
            <a
              className={s.item__link}
              key={`${link.replace(' ', '')}_link`}
              href={`/${linkQuery}`}>
              {link}
            </a>
          )
        })}
    </div>
  )

  const handleDrop = () => {
    setDrop(drop => !drop)
  }

  return (
    <li className={s.item}>
      {links ? (
        <Fragment>
          <p className={s.item__link} onClick={handleDrop}>
            <span className={s['item__link--span']}>{isDropped}</span>&nbsp;
            {title}
          </p>
          {dropdownLinks}
        </Fragment>
      ) : (
        <a className={s.item__link} href={`/${titleQuery}`}>
          {title}
        </a>
      )}
    </li>
  )
}

export default NavItem
