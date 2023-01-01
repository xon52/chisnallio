import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import OverlayVue from './Overlay.vue'

const { getByTestId, getAllByTestId } = screen

const overlayTestId = 'overlay-wrapper'
const testTextTestId = 'test-text'
const overlayClickEmit = 'overlayClick'
const _default = `<h1 data-testid="${testTextTestId}">Default Slot</h1>`

describe(`Overlay.vue`, () => {
  describe(`Overlay shows used slots`, () => {
    it(`should render '${_default}'`, () => {
      render(OverlayVue, { slots: { default: _default } })
      expect(getAllByTestId(testTextTestId).length).toBe(1)
    })
  })

  describe(`overlay responds to click event`, () => {
    it(`should show menu`, async () => {
      const renderResult = render(OverlayVue)
      const wrapperElement = getByTestId(overlayTestId)
      await userEvent.click(wrapperElement)
      expect(renderResult.emitted()[overlayClickEmit].length).toBe(1)
    })
  })
})
