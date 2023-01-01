import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import router from '@/router'
import NavMenuButtonVue from './NavMenuButton.vue'
import type { LinkType } from '@/types'

const { getByTestId } = screen

const wrapperTestId = 'nav-menu-button'
const link: LinkType = { icon: 'fas house', label: 'Home' }
const path = '/test'
const url = 'https://test.io/url'

router.push = vi.fn()
globalThis.open = vi.fn()

describe(`NavMenuButton.vue`, () => {
  describe(`menu button responds to click event`, () => {
    it(`should use router.push() when a path is provided in the link`, async () => {
      render(NavMenuButtonVue, { props: { link: { ...link, path } } })
      await userEvent.click(getByTestId(wrapperTestId))
      expect(router.push).toBeCalledWith(path)
    })
    it(`should use globalThis.open() when a url is provided in the link`, async () => {
      render(NavMenuButtonVue, { props: { link: { ...link, url } } })
      await userEvent.click(getByTestId(wrapperTestId))
      expect(globalThis.open).toBeCalledWith(url)
    })
  })
})
