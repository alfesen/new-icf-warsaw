import ImageLink from '../../../UI/ImageLink/ImageLink'
import s from './Shortcuts.module.scss'
import { v4 as uuidv4 } from 'uuid'

import events from '../../../assets/images/links/events-sm.jpg'
import group from '../../../assets/images/links/group-sm.jpg'
import sermon from '../../../assets/images/links/sermon-sm.jpg'
import contact from '../../../assets/images/links/contact-sm.jpg'

const Shortcuts = () => {
  const linksData = [
    { image: events, name: 'Upcoming events' },
    { image: group, name: 'Small groups' },
    { image: sermon, name: 'Sermons' },
    { image: contact, name: 'Contact' },
  ]

  const renderLinks = linksData.map(link => {
    return (
      <ImageLink
        key={`${link.name}_${uuidv4()}`}
        className={s.shortcuts__link}
        image={link.image}
        text={link.name}
      />
    )
  })

  return <section className={s.shortcuts}>{renderLinks}</section>
}

export default Shortcuts
