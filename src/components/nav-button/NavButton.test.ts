import { beforeEach, describe, expect, test, vi } from 'vitest'
import NavButtonVue from './NavButton.vue'
import { render, fireEvent, RenderResult, waitFor } from '@testing-library/vue'

const wrapperClass = 'nav-button-wrapper'
const iconClass = 'nav-button-icon'
const labelClass = 'nav-button-label'
const loadingClass = 'nav-button-loading'
const icon = 'fas house'
const label = 'Home'
const delay = 400

describe(`nav button loads with an animation`, () => {
  test(`should render the wrapper with a '${loadingClass}' class and remove it after the ${delay}ms delay`, async () => {
    vi.useFakeTimers()
    const renderResult = render(NavButtonVue, { props: { icon, label, delay } })
    const wrapperElement = renderResult.container.getElementsByClassName(wrapperClass)[0]
    expect(wrapperElement.classList).toContainEqual(loadingClass)
    await vi.advanceTimersByTime(delay)
    expect(wrapperElement.classList).not.toContainEqual(loadingClass)
    vi.useRealTimers()
  })
})

describe(`nav button responds to mouseover event`, () => {
  let renderResult: RenderResult
  const getWrapperElement = () => renderResult.container.getElementsByClassName(wrapperClass)[0]
  const getIconElement = () => renderResult.container.getElementsByClassName(iconClass)[0]
  const getLabelElement = () => renderResult.container.getElementsByClassName(labelClass)[0]
  beforeEach(() => {
    renderResult = render(NavButtonVue, { props: { icon, label, delay } })
  })
  test(`should render the icon (class: "${iconClass}") and not the label (class: "${labelClass}") initially`, () => {
    expect(getIconElement()).toBeTruthy()
    expect(getLabelElement()).toBeFalsy()
  })
  test(`should render the label (class: "${labelClass}") and not the icon (class: "${iconClass}") on hover`, async () => {
    await fireEvent.mouseEnter(getWrapperElement())
    await waitFor(() => expect(getLabelElement()).toBeTruthy())
    expect(getIconElement()).toBeFalsy()
  })
})
