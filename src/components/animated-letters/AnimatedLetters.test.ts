import { afterAll, beforeAll, beforeEach, describe, expect, test, vi } from 'vitest'
import AnimatedLettersVue from './AnimatedLetters.vue'
import { render, fireEvent } from '@testing-library/vue'

const characterClass = 'text-char'
const loadingClass = 'text-loading'
const hoverClass = 'hover'
const text = 'test text'
const delay = 1234

describe(`text is shown and animates correctly`, () => {
  let container: Element
  beforeEach(() => {
    container = render(AnimatedLettersVue, { props: { text, delay } }).container
  })
  beforeAll(() => {
    vi.useFakeTimers()
  })
  afterAll(() => {
    vi.useRealTimers()
  })
  test(`should render the provided text prop (${text})`, () => expect(container.textContent).toBe(text))
  test(`should attribute each character provided with '${loadingClass}' & '${characterClass}' classes`, () => {
    expect(container.getElementsByClassName(characterClass).length).toBe(text.length)
    expect(container.getElementsByClassName(loadingClass).length).toBe(text.length)
  })
  test(`should remove '${loadingClass}' class after the ${delay}ms delay and not before`, async () => {
    await vi.advanceTimersByTime(delay - 0.01)
    expect(container.getElementsByClassName(loadingClass).length).toBe(text.length)
    await vi.advanceTimersByTime(0.01)
    expect(container.getElementsByClassName(loadingClass).length).toBe(0)
  })
  test(`should add the '${hoverClass}' class to characters on mouseEnter and remove it on animationEnd`, async () => {
    const target = container.getElementsByClassName(characterClass)[0]
    expect(target.classList.contains(hoverClass)).toBeFalsy()
    await fireEvent.mouseEnter(target)
    expect(target.classList.contains(hoverClass)).toBeTruthy()
    await fireEvent.animationEnd(target)
    expect(target.classList.contains(hoverClass)).toBeFalsy()
  })
})
