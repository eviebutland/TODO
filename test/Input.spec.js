import { mount } from '@vue/test-utils'
import InputField from '@/components/form/input.vue'

describe('InputField', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(InputField)
    expect(wrapper.vm).toBeTruthy()
  })
})
