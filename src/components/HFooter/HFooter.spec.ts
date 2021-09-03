import { shallowMount } from '@vue/test-utils'
import HBtn from './HBtn.vue'

describe('HBtn.vue', () => {
  it('fires click event when clicked', async () => {
    const wrapper = shallowMount(HBtn)

    await wrapper.findComponent(HBtn).trigger('click');

    const actual = wrapper.emitted()['click'];

    expect(actual).toBeTruthy()
  })

  it('not fires click event when clicked if disabled', async () => {
    const wrapper = shallowMount(HBtn)

    wrapper.setProps({disabled: true});

    await wrapper.findComponent(HBtn).trigger('click');

    const actual = wrapper.emitted()['click'];

    expect(actual).toBeTruthy()
  })
})