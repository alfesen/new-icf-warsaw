import s from './SectionHeading.module.scss'

const SectionHeading = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return <h2 className={`${s.heading} ${className}`}>{text}</h2>
}

export default SectionHeading
