import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FancyButton from '../FancyButton.vue'

describe('FancyButton', () => {
  it('renders properly', () => {
    const wrapper = mount(FancyButton, { slots: { default: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
