import { useParagraphs } from '../../hooks/useParagraphs'

const Paragraphs = ({ text }: { text: string }) => {
  const splitParagraphs = useParagraphs(text)

  return <div>{splitParagraphs}</div>
}

export default Paragraphs
