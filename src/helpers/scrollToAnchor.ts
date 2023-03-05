import wait from './wait'
import getElementFromAnchor from './getElementFromAnchor'

export default async (anchor: string, offset: number = 0) => {
  // Get the element
  const element = await getElementFromAnchor(anchor)
  const targetTop = Math.max(element.getBoundingClientRect().top + globalThis.scrollY - offset, 0)

  // If the target is already in view, scroll a little bit to trigger the smooth scroll
  if (globalThis.scrollY === targetTop) {
    const shakeOffset = targetTop === 0 ? 10 : -10
    globalThis.scrollTo({ top: targetTop + shakeOffset })
    await wait(50)
  }
  // Scroll to the target
  globalThis.scrollTo({
    top: targetTop,
    behavior: 'smooth',
  })
}
