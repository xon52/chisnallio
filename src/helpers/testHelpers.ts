import { screen } from '@testing-library/dom'

// Adapted from: https://stackoverflow.com/a/55516023/8476558
export const isTextRendered = (text: string) => screen.getAllByText((_, node) => node.textContent === text).length > 0

export const getAllByAttribute = (attr: string, value?: string) =>
  screen.queryAllByText(
    (_, node) => node.hasAttribute(attr) && (value === undefined || node.getAttribute(attr) === value)
  )
