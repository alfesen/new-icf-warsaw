import s from './NavDropdown.module.scss'

const NavDropdown = ({ links }: { links: string[] }) => {
  const renderLinks =
    links &&
    links.map(link => {
      const linkQuery = link
        .trim()
        .replaceAll('/', '')
        .replaceAll('%', 'per')
        .replaceAll('& ', '')
        .replaceAll(' ', '-')
        .toLowerCase()
      return (
        <a
          className={s.link}
          key={`${link.replaceAll(' ', '')}_link`}
          href={`/${linkQuery}`}>
          {link}
        </a>
      )
    })

  return <div className={s.links}>{renderLinks}</div>
}

export default NavDropdown
