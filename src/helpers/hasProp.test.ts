import { describe, expect, test } from 'vitest'
import { hasProp } from '.'

const mockObject = { name: 'John Smith', age: 53 }

describe('Helpers: hasProp()', () => {
  test('should return whether an object has a given property or not', () => {
    expect(hasProp(mockObject, 'name')).toBeTruthy()
    expect(hasProp(mockObject, 'age')).toBeTruthy()
    expect(hasProp(mockObject, 'address')).toBeFalsy()
  })
})
