import getElementFromAnchor from './getElementFromAnchor'
import pageLinks from '@/pages/PageLinks'

export default (deltaY: number) => {
  const anchors = pageLinks.map((link) => link.anchor)
  console.log('anchors', anchors)
  const currentPosition = globalThis.scrollY
  const distancedAnchors = anchors.map((anchor) => {
    console.log('anchor', anchor)
    return {
      anchor,
      top: getElementFromAnchor(anchor).getBoundingClientRect().top,
    }
  })
  console.log('distancedAnchors', distancedAnchors)
  if (deltaY > 0) {
    const nearestAnchor = distancedAnchors.find((anchor) => anchor.top < currentPosition)
    return nearestAnchor?.anchor
  } else {
    const nearestAnchor = distancedAnchors.reverse().find((anchor) => anchor.top > currentPosition)
    return nearestAnchor?.anchor
  }
}
