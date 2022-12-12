import s from './NavDropdown.module.scss'

const NavDropdown = ({ links }: { links: string[] }) => {
  return (
    <div className={s.links}>
      {links &&
        links.map(link => {
          const linkQuery = link.replaceAll(' ', '').toLowerCase()
          return (
            <a
              className={s.link}
              key={`${link.replaceAll(' ', '')}_link`}
              href={`/${linkQuery}`}>
              {link}
            </a>
          )
        })}
    </div>
  )
}

export default NavDropdown
