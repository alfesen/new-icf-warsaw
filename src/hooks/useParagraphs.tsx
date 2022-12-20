export const useParagraphs = (initialContent: any) => {
  let content: string | string[] = ''
  if (initialContent.includes('\n')) {
    const splitContent = initialContent.split('\n')
    content = splitContent.map((p: string) => {
      return <p key={p.length + Math.random()}>{p.trim()}</p>
    })
  } else {
    return initialContent
  }
  return content
}
