import { render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import ToolbarVue from './Toolbar.vue'

const { getAllByText } = screen

const needleText = 'Needle'

describe(`Toolbar.vue`, () => {
  it('should display needle in the start slot', async () => {
    render(ToolbarVue, { slots: { start: needleText } })
    expect(getAllByText(needleText).length).toBe(1)
  })
  it('should display needle in the center slot', async () => {
    render(ToolbarVue, { slots: { center: needleText } })
    expect(getAllByText(needleText).length).toBe(1)
  })
  it('should display needle in the end slot', async () => {
    render(ToolbarVue, { slots: { end: needleText } })
    expect(getAllByText(needleText).length).toBe(1)
  })
})
