import { describe, expect, test, vi } from 'vitest'
import { wait } from '.'

const delay = 1500
const mockFunction = vi.fn()

describe('Helpers: wait()', () => {
  test('should wait for the given number of milliseconds', async () => {
    vi.useFakeTimers()
    wait(delay).then(() => mockFunction())
    expect(mockFunction).not.toHaveBeenCalled()
    await vi.advanceTimersByTime(delay)
    expect(mockFunction).toHaveBeenCalledOnce()
    vi.useRealTimers()
  })
})
