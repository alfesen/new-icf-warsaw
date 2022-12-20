import s from './Location.module.scss'
import { lazy } from 'react'
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import building from '../../../assets/images/about/building.jpg'
import { Fade } from 'react-awesome-reveal'

const Map = lazy(() => import('./Map/Map'))

const Location = () => (
  <div className={s.location}>
    <SectionHeading text='Find us' />
    <p>Puławska 326, 02-825 Warszawa</p>
    <div className={s.location__media}>
      <Map />
      <Fade triggerOnce>
        <p className={s.location__directions}>
          How to get here by public transit: Take bus 209, 319, 709, 715, 727,
          or 739 to Sójki. Click on "Directions" above for details.
        </p>
        <img
          className={s.location__building}
          src={building}
          alt='ICF Building top floor'
        />
      </Fade>
    </div>
  </div>
)

export default Location
