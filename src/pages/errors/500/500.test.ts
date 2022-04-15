import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TargetComponent from './500.vue'

test('entry component', async () => {
  expect(TargetComponent).toBeTruthy()
  const mountedComponent = mount(TargetComponent)
  expect(mountedComponent.text()).toContain('500')
})
