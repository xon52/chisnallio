import { describe, expect, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TargetComponent from './Error.vue'

const testTitle = 'Test Title'
const testDescription = 'Test description.'
const testProps = { title: testTitle, description: testDescription }

describe('entry component', () => {
  test('should find imported component', () => {
    expect(TargetComponent).toBeTruthy()
  })

  test('should render component with a go back button', async () => {
    const mountedComponent = shallowMount(TargetComponent, { props: { ...testProps, goback: true } })
    expect(mountedComponent.text()).toContain(testTitle)
    expect(mountedComponent.text()).toContain(testDescription)
    expect(mountedComponent.text()).toContain('Go Back')
  })

  test('should render component without a go back button', async () => {
    const mountedComponent = shallowMount(TargetComponent, { props: { ...testProps } })
    expect(mountedComponent.text()).toContain(testTitle)
    expect(mountedComponent.text()).toContain(testDescription)
    expect(mountedComponent.text()).not.toContain('Go Back')
  })
})
