import s from './Welcome.module.scss'
import { useParagraphs } from '../../../hooks/useParagraphs'
import { aboutWelcome } from '../../../db/texts.json'
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'

const Welcome = () => {
  const welcomeParagraphs = useParagraphs(aboutWelcome)

  return (
    <div className={s.welcome}>
      <SectionHeading text='Welcome' />
      {welcomeParagraphs}
    </div>
  )
}

export default Welcome
