type Props = {
  title: string
  links?: string[]
}

const NavItem = (props: Props) => {
  const { title, links } = props

  return (
    <li>
      <p>{title}</p>
      {links && (
        <div>
          {links.map(link => {
            return <a href={`/${link}`}>{link}</a>
          })}
        </div>
      )}
    </li>
  )
}

export default NavItem
