import { expect, test } from 'vitest'
import AppVue from './App.vue'
import { render } from '@testing-library/vue';

test('entry component', async () => {
  const text = render(AppVue).container.textContent
  // expect(text).toContain('TEST')
})
