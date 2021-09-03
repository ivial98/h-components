import HHeader from './HHeader.vue'

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { HHeader },
    template:
      `
      <HHeader>
        <template v-if="${'header-logo' in args}" v-slot:header-logo>${args['header-logo']}</template>
        <template v-if="${'header-name' in args}" v-slot:header-name>${args['header-name']}</template>
      </HHeader>
      `,
  }
}

export default {
  component: HHeader,
  title: 'Components/HHeader',
};

export const regular = Template.bind({})
regular.args = {
  'header-logo': '<img class="w-8" src="https://vuejs.org/images/logo.svg" alt="Vue logo">',
  'header-name': '<span class="font-semibold">App name</span>'
}