import s from './WelcomeLocation.module.scss'
import Welcome from '../../../../components/AboutComponents/Welcome/Welcome'
import Location from '../../../../components/AboutComponents/Location/Location'

const WelcomeLocation = () => (
  <div className={s.welcome}>
    <Welcome />
    <hr />
    <Location />
  </div>
)

export default WelcomeLocation
