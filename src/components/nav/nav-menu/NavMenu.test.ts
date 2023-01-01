import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import NavMenuVue from './NavMenu.vue'

const { getByTestId, queryByTestId } = screen

const openButtonTestId = 'nav-menu-open-button'
const closeButtonTestId = 'nav-menu-close-button'
const menuTestId = 'nav-menu-menu'

describe(`NavMenu.vue`, () => {
  describe(`When it is first rendered`, () => {
    it(`should start closed and have an open button`, async () => {
      render(NavMenuVue)
      expect(queryByTestId(openButtonTestId)).toBeTruthy()
      expect(queryByTestId(menuTestId)).toBeFalsy()
    })
    it(`should open the menu when the open button is pressed`, async () => {
      render(NavMenuVue)
      await userEvent.click(getByTestId(openButtonTestId))
      expect(queryByTestId(menuTestId)).toBeTruthy()
    })
  })

  describe(`When it is open`, () => {
    it.skip(`menu should display the menu contents`, async () => {
      const { getByTestId } = render(NavMenuVue)
      await userEvent.click(getByTestId(openButtonTestId))
    })
    it(`should display a close button which closes the menu`, async () => {
      render(NavMenuVue)
      await userEvent.click(getByTestId(openButtonTestId))
      expect(queryByTestId(menuTestId)).toBeTruthy()
      expect(queryByTestId(closeButtonTestId)).toBeTruthy()
      await userEvent.click(getByTestId(closeButtonTestId))
      expect(queryByTestId(menuTestId)).toBeFalsy()
    })
  })
})
