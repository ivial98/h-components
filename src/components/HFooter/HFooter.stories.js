import HFooter from './HFooter.vue'
import { withKnobs, boolean} from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
    component: HFooter,
    title: 'Components/HFooter',
    decorators: [withKnobs]
  };

  export const regular = () => ({
    components: { HFooter },
    template: "<HFooter/>",
    props: {
      disabled: {
        default: boolean('disabled', false)
      }
    },
    methods: {
      click: action('click')
    }
  });