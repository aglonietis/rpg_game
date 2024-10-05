import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../layout/PageHeader.vue'
import PageHeader from "../layout/PageHeader.vue";

describe('PageHeader', () => {
  it('renders properly', () => {
    const wrapper = mount(PageHeader)
    expect(wrapper.text()).toContain('Home')
    expect(wrapper.text()).toContain('Game')
  })
})
