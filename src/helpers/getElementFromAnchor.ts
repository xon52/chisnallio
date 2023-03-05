export default (anchor: string) => {
  // Add a hash to the anchor if it doesn't have one
  if (anchor[0] !== '#') {
    anchor = '#' + anchor
  }
  // Get the element
  const element = document.querySelector(anchor)
  // Throw an error if the element is not found
  if (!element) {
    throw new Error(`Could not find element with anchor "${anchor}"`)
  }
  // Return the element
  return element
}
