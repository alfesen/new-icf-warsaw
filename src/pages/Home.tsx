import s from './Home.module.scss'

import Announcements from '../components/HomeComponents/Announcements/Announcements'
import Welcome from '../components/HomeComponents/Welcome/Welcome'
import { Fragment } from 'react'
import Shortcuts from '../components/HomeComponents/Shortcuts/Shortcuts'
import UsefulLinks from '../components/HomeComponents/UsefulLinks/UsefulLinks'
import { Fade } from 'react-awesome-reveal'

const Home = () => {
  return (
    <Fragment>
      <div className={s.home__top}>
        <Fade direction='left' triggerOnce={true}>
          <Welcome />
        </Fade>
        <Fade direction='left' triggerOnce={true}>
          <Announcements />
        </Fade>
      </div>
      <Fade direction='left' triggerOnce={true}>
        <Shortcuts />
      </Fade>
      <Fade direction='left' triggerOnce={true}>
        <UsefulLinks />
      </Fade>
    </Fragment>
  )
}

export default Home
