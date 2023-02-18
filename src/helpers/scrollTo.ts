export default (anchor: string, offset?: number) => {
  const element = document.querySelector(anchor)
  if (anchor[0] === '#') {
    anchor = anchor.slice(1)
  }
  if (element) {
    globalThis.scrollTo({
      top: element.getBoundingClientRect().top + globalThis.scrollY - (offset || 0),
      behavior: 'smooth',
    })
  } else {
    console.warn(`Could not find element "${anchor}" to scroll to.`)
  }
}
