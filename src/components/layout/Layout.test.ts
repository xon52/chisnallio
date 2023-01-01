import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/vue'
import LayoutVue from './Layout.vue'

const text = 'test text'
const element = `<h1>${text}</h1>`

describe.concurrent(`layout shows used slots`, () => {
  it(`should render the default slot`, () => {
    const { queryByText } = render(LayoutVue, { slots: { default: element } })
    expect(queryByText(text)).toBeTruthy()
  })
  it(`should render the sidebar slot`, () => {
    const { queryByText } = render(LayoutVue, { slots: { sidebar: element } })
    expect(queryByText(text)).toBeTruthy()
  })
  it(`should render the header slot`, () => {
    const { queryByText } = render(LayoutVue, { slots: { header: element } })
    expect(queryByText(text)).toBeTruthy()
  })
  it(`should render the footer slot`, () => {
    const { queryByText } = render(LayoutVue, { slots: { footer: element } })
    expect(queryByText(text)).toBeTruthy()
  })
  it(`should not render a control`, () => {
    const { queryByText } = render(LayoutVue)
    expect(queryByText(text)).toBeFalsy()
  })
})
