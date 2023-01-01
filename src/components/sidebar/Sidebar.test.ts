import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/vue'
import SidebarVue from './Sidebar.vue'

const { getAllByText } = screen

const needleText = 'Needle'

describe(`Sidebar.vue`, () => {
  it('should display needle in the default slot', async () => {
    render(SidebarVue, { slots: { default: needleText } })
    expect(getAllByText(needleText).length).toBe(1)
  })
  it('should display needle in the header slot', async () => {
    render(SidebarVue, { slots: { header: needleText } })
    expect(getAllByText(needleText).length).toBe(1)
  })
  it('should display needle in the footer slot', async () => {
    render(SidebarVue, { slots: { footer: needleText } })
    expect(getAllByText(needleText).length).toBe(1)
  })
})
