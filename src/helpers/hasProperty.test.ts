import { describe, expect, test } from 'vitest'
import { hasProperty } from '.'

const mockObject = { name: 'John Smith', age: 53 }

describe('check hasProperty helper', () => {
  test('should return whether an object has a given property or not', () => {
    expect(hasProperty(mockObject, 'name')).toBeTruthy()
    expect(hasProperty(mockObject, 'age')).toBeTruthy()
    expect(hasProperty(mockObject, 'address')).toBeFalsy()
  })
})
