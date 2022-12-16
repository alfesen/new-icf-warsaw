import s from './Home.module.scss'

import Announcements from '../../components/HomeComponents/Announcements/Announcements'
import Welcome from '../../components/HomeComponents/Welcome/Welcome'
import { Fragment } from 'react'
import Shortcuts from '../../components/HomeComponents/Shortcuts/Shortcuts'
import UsefulLinks from '../../components/HomeComponents/UsefulLinks/UsefulLinks'
import { Fade } from 'react-awesome-reveal'

const Home = () => {
  return (
    <Fragment>
      <Fade direction='up' triggerOnce={true} damping={0.1}>
        <div className={s.home__top}>
          <Welcome />
          <Announcements />
        </div>
        <Shortcuts />
      </Fade>
      <Fade delay={550}>
        <UsefulLinks />
      </Fade>
    </Fragment>
  )
}

export default Home
