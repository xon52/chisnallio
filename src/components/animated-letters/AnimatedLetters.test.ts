import { describe, expect, it, vi } from 'vitest'
import AnimatedLettersVue from './AnimatedLetters.vue'
import { render, fireEvent, screen, getByDisplayValue } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { isTextRendered } from '@/helpers';

const { queryAllByTestId, getAllByText, getByText } = screen

const characterTestId = 'animated-letters-character'
const loadingClass = 'loading'
const hoverClass = 'hover'
const text = 'test text'
const delay = 1234

describe.concurrent(`AnimatedLetters.vue`, () => {
  it(`should render only the provided text prop`, async () => {
    render(AnimatedLettersVue, { props: { text } })
    expect(isTextRendered(text)).toBe(true)
  })
  it(`should attribute each character provided with loading and character classes`, () => {
    render(AnimatedLettersVue, { props: { text } })
    expect(queryAllByTestId(characterTestId).length).toBe(text.length)
    expect(queryAllByTestId(characterTestId).length).toBe(text.length)
  })
  it(`should remove the loading class after the provided delay (and not before)`, async () => {
    vi.useFakeTimers()
    render(AnimatedLettersVue, { props: { text, delay } })
    await vi.advanceTimersByTime(delay - 1)
    const targets = queryAllByTestId(characterTestId)
    targets.forEach((t) => expect(t.classList.contains(loadingClass)).toBeTruthy())
    await vi.advanceTimersByTime(1)
    targets.forEach((t) => expect(t.classList.contains(loadingClass)).toBeFalsy())
    vi.useRealTimers()
  })
  it(`should add the hover class to characters on hover and remove it once the animation ends`, async () => {
    render(AnimatedLettersVue, { props: { text } })
    const targets = queryAllByTestId(characterTestId)
    targets.forEach((t) => expect(t.classList.contains(hoverClass)).toBeFalsy())
    await userEvent.hover(targets[0])
    expect(targets[0].classList.contains(hoverClass)).toBeTruthy()
    // TODO: Not sure how to wait for animationEnd event properly
    await fireEvent.animationEnd(targets[0])
    targets.forEach((t) => expect(t.classList.contains(hoverClass)).toBeFalsy())
  })
})
