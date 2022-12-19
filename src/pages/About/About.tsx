import SideNavigation from '../../layout/SideNavigation/SideNavigation'
import { about } from '../../db/links.json'

const About = () => {
  return (
    <div>
      <SideNavigation collectionTitle={about.title} links={about.links} />
    </div>
  )
}

export default About
