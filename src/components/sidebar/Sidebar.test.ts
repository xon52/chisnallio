import { render } from '@testing-library/vue'
import { beforeAll, describe, expect, test } from 'vitest'
import SidebarVue from './Sidebar.vue'

const _default = `<h1>Default Slot</h1>`
const header = `Header Slot`
const footer = `<footer>Footer Slot</footer>`
const control = `<p>A control element</p>`

describe(`sidebar shows used slots`, () => {
  let html: string
  beforeAll(() => {
    const renderResult = render(SidebarVue, { slots: { default: _default, header, footer } })
    html = renderResult.container.innerHTML
  })
  test(`should render '${_default}'`, () => expect(html.includes(_default)).toBeTruthy())
  test(`should render '${header}'`, () => expect(html.includes(header)).toBeTruthy())
  test(`should render '${footer}'`, () => expect(html.includes(footer)).toBeTruthy())
  test(`should not render '${control}'`, () => expect(html.includes(control)).toBeFalsy())
})
