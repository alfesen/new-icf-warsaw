import { Fragment } from 'react'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { useClientWidth } from '../../../hooks/useClientWidth'
import NavDropdown from './NavDropdown'
import s from './NavItem.module.scss'

type Props = {
  title: string
  links?: string[]
}

const NavItem = (props: Props) => {
  const { title, links } = props
  const { width } = useClientWidth()

  const desktop = width > 700
  let drop = false

  const { ref, visible, setVisible } = useOutsideClick(drop)
  const isDropped = drop ? '-' : `+`
  const titleQuery = title.replace(' ', '').toLowerCase()
  const dropdownLinks = visible && links && <NavDropdown links={links} />

  const handleDrop = () => {
    setVisible(drop => !drop)
  }

  const dropdownMedia = desktop ? (
    <p className={s.item__link} onMouseEnter={handleDrop}>
      <span className={s['item__link--span']}>{isDropped}</span>&nbsp;
      {title}
    </p>
  ) : (
    <p className={s.item__link} onClick={handleDrop}>
      <span className={s['item__link--span']}>{isDropped}</span>&nbsp;
      {title}
    </p>
  )

  return (
    <li ref={ref} className={s.item}>
      {links ? (
        <Fragment>
          {dropdownMedia}
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
