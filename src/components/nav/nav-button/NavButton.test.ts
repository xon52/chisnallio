import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import router from '@/router'
import NavButtonVue from './NavButton.vue'
import type { LinkType } from '@/types'

const { getByTestId, queryByTestId } = screen

const wrapperTestId = 'nav-button-wrapper'
const iconTestId = 'nav-button-icon'
const labelTestId = 'nav-button-label'
const largeClass = 'large'
const smallClass = 'small'
const loadingClass = 'loading'
const link: LinkType = { icon: 'fas house', label: 'Home' }
const loadingTime = 300

describe(`NavButton.vue`, () => {
  describe(`nav button loads with an animation`, () => {
    it(`should render the wrapper with a loading class and remove it after the provided delay`, async () => {
      vi.useFakeTimers()
      render(NavButtonVue, { props: { link, loadingTime } })
      const wrapperElement = getByTestId(wrapperTestId)
      expect(wrapperElement.classList).toContainEqual(loadingClass)
      await vi.advanceTimersByTime(loadingTime - 1)
      expect(wrapperElement.classList).toContainEqual(loadingClass)
      await vi.advanceTimersByTime(1)
      expect(wrapperElement.classList).not.toContainEqual(loadingClass)
      vi.useRealTimers()
    })
  })

  describe(`nav button responds to hover event`, () => {
    it(`should render the icon and not the label initially`, () => {
      render(NavButtonVue, { props: { link } })
      expect(getByTestId(iconTestId)).toBeTruthy()
      expect(queryByTestId(labelTestId)).toBeFalsy()
    })
    it(`should render the label and not the icon on hover`, async () => {
      render(NavButtonVue, { props: { link } })
      await userEvent.hover(getByTestId(wrapperTestId))
      expect(getByTestId(labelTestId)).toBeTruthy()
      expect(queryByTestId(iconTestId)).toBeFalsy()
    })
  })

  describe(`nav button handles size props`, () => {
    it(`should render the wrapper with no size class`, () => {
      const { getByTestId } = render(NavButtonVue, { props: { link } })
      const wrapperElement = getByTestId(wrapperTestId)
      expect(wrapperElement.classList).not.toContainEqual(largeClass)
      expect(wrapperElement.classList).not.toContainEqual(smallClass)
    })
    it(`should render the wrapper with a "${largeClass}" class`, () => {
      const { getByTestId } = render(NavButtonVue, { props: { link, large: true } })
      const wrapperElement = getByTestId(wrapperTestId)
      expect(wrapperElement.classList).toContainEqual(largeClass)
      expect(wrapperElement.classList).not.toContainEqual(smallClass)
    })
    it(`should render the wrapper with a "${smallClass}" class`, () => {
      const { getByTestId } = render(NavButtonVue, { props: { link, small: true } })
      const wrapperElement = getByTestId(wrapperTestId)
      expect(wrapperElement.classList).not.toContainEqual(largeClass)
      expect(wrapperElement.classList).toContainEqual(smallClass)
    })
  })

  describe(`nav button responds to click event`, () => {
    it(`should use router.push() when a path is provided in the link`, async () => {
      router.push = vi.fn()
      const path = '/test'
      const { getByTestId } = render(NavButtonVue, { props: { link: { ...link, path } } })
      const wrapperElement = getByTestId(wrapperTestId)
      await userEvent.click(wrapperElement)
      expect(router.push).toBeCalledWith(path)
    })
    it(`should use globalThis.open() when a url is provided in the link`, async () => {
      globalThis.open = vi.fn()
      const url = 'https://test.io/url'
      const { getByTestId } = render(NavButtonVue, { props: { link: { ...link, url } } })
      const wrapperElement = getByTestId(wrapperTestId)
      await userEvent.click(wrapperElement)
      expect(globalThis.open).toBeCalledWith(url)
    })
  })
})
