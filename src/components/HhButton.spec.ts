import { shallowMount } from '@vue/test-utils'
import HhButton from './HhButton.vue'

describe('HhButton.vue', () => {
  it('fires click event when clicked', async () => {
    const wrapper = shallowMount(HhButton)

    await wrapper.findComponent(HhButton).trigger('click');

    const actual = wrapper.emitted()['click'];

    expect(actual).toBeTruthy()
  })

  it('not fires click event when clicked if disabled', async () => {
    const wrapper = shallowMount(HhButton)

    wrapper.setProps({disabled: true});

    await wrapper.findComponent(HhButton).trigger('click');

    const actual = wrapper.emitted()['click'];

    expect(actual).toBeTruthy()
  })
})