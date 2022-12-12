import s from './Home.module.scss'

import Announcements from '../components/HomeComponents/Announcements/Announcements'
import Welcome from '../components/HomeComponents/Welcome/Welcome'
import { Fragment } from 'react'
import Shortcuts from '../components/HomeComponents/Shortcuts/Shortcuts'
import UsefulLinks from '../components/HomeComponents/UsefulLinks/UsefulLinks'
import { Fade } from 'react-reveal'

const Home = () => {
  return (
    <Fragment>
      <div className={s.home__top}>
        <Fade up>
          <Welcome />
        </Fade>
        <Fade up>
          <Announcements />
        </Fade>
      </div>
      <Fade up>
        <Shortcuts />
      </Fade>
      <Fade up>
        <UsefulLinks />
      </Fade>
    </Fragment>
  )
}

export default Home
