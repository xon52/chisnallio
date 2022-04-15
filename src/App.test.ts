import { expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppVue from './App.vue'

test('entry component', async () => {
  expect(AppVue).toBeTruthy()
  const app = shallowMount(AppVue)
  expect(app.text()).toContain('TEST')
})
