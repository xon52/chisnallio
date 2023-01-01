import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/vue'
import { getAllByAttribute } from '@/helpers'
import IconWrapperVue from './IconWrapper.vue'

describe.concurrent(`IconWrapper.vue`, () => {
  it(`should render an icon`, async () => {
    render(IconWrapperVue, { props: { icon: 'fas house' } })
    expect(getAllByAttribute('data-icon', 'house').length).toBe(1)
  })
})
