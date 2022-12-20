import s from './Welcome.module.scss'
import { useParagraphs } from '../../../hooks/useParagraphs'
import { aboutWelcome } from '../../../db/texts.json'

const Welcome = () => {
  const welcomeParagraphs = useParagraphs(aboutWelcome)

  return <div className={s.welcome}>{welcomeParagraphs}</div>
}

export default Welcome
