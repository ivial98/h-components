import HBtn from './HBtn.vue'
import { withKnobs, boolean} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    component: HBtn,
    title: 'Components/HBtn',
    decorators: [withKnobs]
  };

  export const regular = () => ({
    components: { HBtn },
    template: "<HBtn :disabled='disabled' @click='click'>Click me</HBtn",
    props: {
      disabled: {
        default: boolean('disabled', false)
      }
    },
    methods: {
      click: action('click')
    }
  });