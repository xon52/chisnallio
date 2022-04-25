import { beforeEach, describe, expect, test, vi } from 'vitest'
import NavButtonVue from './NavButton.vue'
import { render, fireEvent, RenderResult } from '@testing-library/vue'
import { LinkType } from '../../types'
import router from '../../router'

const wrapperClass = 'nav-button-wrapper'
const iconClass = 'nav-button-icon'
const labelClass = 'nav-button-label'
const loadingClass = 'nav-button-loading'
const link: LinkType = { icon: 'fas house', label: 'Home' }
const loadingTime = 300

describe.concurrent(`nav button loads with an animation`, () => {
  test(`should render the wrapper with a '${loadingClass}' class and remove it after the ${loadingTime}ms delay`, async () => {
    vi.useFakeTimers()
    const renderResult = render(NavButtonVue, { props: { link, loadingTime } })
    const wrapperElement = renderResult.container.getElementsByClassName(wrapperClass)[0]
    expect(wrapperElement.classList).toContainEqual(loadingClass)
    await vi.advanceTimersByTime(loadingTime - 1)
    expect(wrapperElement.classList).toContainEqual(loadingClass)
    await vi.advanceTimersByTime(1)
    expect(wrapperElement.classList).not.toContainEqual(loadingClass)
    vi.useRealTimers()
  })
})

describe.concurrent(`nav button responds to mouseover event`, () => {
  let renderResult: RenderResult
  const getWrapperElement = () => renderResult.container.getElementsByClassName(wrapperClass)[0]
  const getIconElement = () => renderResult.container.getElementsByClassName(iconClass)[0]
  const getLabelElement = () => renderResult.container.getElementsByClassName(labelClass)[0]
  beforeEach(() => {
    renderResult = render(NavButtonVue, { props: { link } })
  })
  test(`should render the icon (class: "${iconClass}") and not the label (class: "${labelClass}") initially`, () => {
    expect(getIconElement()).toBeTruthy()
    expect(getLabelElement()).toBeFalsy()
  })
  test(`should render the label (class: "${labelClass}") and not the icon (class: "${iconClass}") on hover`, async () => {
    await fireEvent.mouseEnter(getWrapperElement())
    expect(getLabelElement()).toBeTruthy()
    expect(getIconElement()).toBeFalsy()
  })
})

describe.concurrent(`nav button handles size props`, () => {
  test(`should render the wrapper with no size class`, () => {
    const renderResult = render(NavButtonVue, { props: { link } })
    const wrapperElement = renderResult.container.getElementsByClassName(wrapperClass)[0]
    expect(wrapperElement.classList).not.toContainEqual('large')
  })
  test(`should render the wrapper with a 'large' class`, () => {
    const renderResult = render(NavButtonVue, { props: { link, large: true } })
    const wrapperElement = renderResult.container.getElementsByClassName(wrapperClass)[0]
    expect(wrapperElement.classList).toContainEqual('large')
  })
})

describe.concurrent(`nav button responds to click event`, () => {
  test(`should use router.push() when a path is provided in the link`, async () => {
    router.push = vi.fn()
    const path = '/test'
    const renderResult = render(NavButtonVue, { props: { link: { ...link, path } } })
    const wrapperElement = renderResult.container.getElementsByClassName(wrapperClass)[0]
    await fireEvent.click(wrapperElement)
    expect(router.push).toBeCalledWith(path)
  })
  test(`should use globalThis.open() when a url is provided in the link`, async () => {
    globalThis.open = vi.fn()
    const url = 'https://test.io/url'
    const renderResult = render(NavButtonVue, { props: { link: { ...link, url } } })
    const wrapperElement = renderResult.container.getElementsByClassName(wrapperClass)[0]
    await fireEvent.click(wrapperElement)
    expect(globalThis.open).toBeCalledWith(url)
  })
})
