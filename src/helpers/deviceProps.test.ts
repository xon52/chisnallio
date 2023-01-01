import { describe, expect, it, vi } from 'vitest'
import { isMobile, isTouch, windowWidth } from '.'

const setWindowWidth = (width: number) => {
  global.innerWidth = width
  global.dispatchEvent(new Event('resize'))
}
const setTouchCapability = (touch: boolean) => {
  global.ontouchstart = touch ? () => {} : undefined
}

describe('Helpers: isMobile, isTouch, windowWidth', () => {
  it('Should accurately report window width after a resize', () => {
    expect(windowWidth.value).toBe(1024)
    setWindowWidth(2048)
    expect(windowWidth.value).toBe(2048)
  })

  it('Should update isMobile when the window width is below the threshold', () => {
    expect(isMobile.value).toBe(false)
    setWindowWidth(500)
    expect(isMobile.value).toBe(true)
  })

  it('Should accurately reflect the browser touch capabilities', () => {
    expect(isTouch.value).toBe(false)
    setTouchCapability(true)
    setWindowWidth(500)
    expect(isTouch.value).toBe(false)
  })
})
