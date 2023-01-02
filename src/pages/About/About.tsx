import s from './About.module.scss'
import SideNavigation from '../../layout/SideNavigation/SideNavigation'
import { about } from '../../db/links.json'
import { Route, Switch } from 'react-router-dom'
import WelcomeLocation from './subpages/WelcomeLocation/WelcomeLocation'
import Staff from './subpages/Staff/Staff'
import Expect from './subpages/Expect/Expect'
import Beliefs from './subpages/Beliefs/Beliefs'
import Regulation from './subpages/Regulation/Regulation'
import Rodo from './subpages/Rodo/Rodo'
import LeadershipTeam from './subpages/LeadershipTeam/LeadershipTeam'
import MinistryLeaders from './subpages/MinistryLeaders/MinistryLeaders'

const About = () => {
  return (
    <div className={s.about}>
      <SideNavigation
        collectionTitle={about.title}
        title='About Us'
        links={about.links}
      />
      <section className={s.about__section}>
        <Switch>
          <Route path='/about/welcome-location'>
            <WelcomeLocation />
          </Route>
          <Route path='/about/our-pastors-and-staff'>
            <Staff />
          </Route>
          <Route path='/about/what-to-expect'>
            <Expect />
          </Route>
          <Route path='/about/what-we-believe'>
            <Beliefs />
          </Route>
          <Route path='/about/eu-regulation-201679'>
            <Regulation />
          </Route>
          <Route path='/about/privacy-policy-rodo'>
            <Rodo />
          </Route>
          <Route path='/about/leadership-team'>
            <LeadershipTeam />
          </Route>
          <Route path='/about/ministry-leaders'>
            <MinistryLeaders />
          </Route>
        </Switch>
      </section>
    </div>
  )
}

export default About
