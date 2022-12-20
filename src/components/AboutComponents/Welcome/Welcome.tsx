import s from './Welcome.module.scss'
import { aboutWelcome } from '../../../db/texts.json'
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import Paragraphs from '../../../UI/Paragraphs/Paragraphs'
import { Fade } from 'react-awesome-reveal'

const Welcome = () => {
  return (
    <Fade triggerOnce className={s.welcome}>
      <SectionHeading text='Welcome' />
      <Paragraphs text={aboutWelcome} />
    </Fade>
  )
}

export default Welcome
