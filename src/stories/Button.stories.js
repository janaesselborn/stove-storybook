import StoveButton from './Button.vue';

export default {
  title: 'Atom/Button',
  component: StoveButton,
  argTypes: {
    onClick: {},
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
    },
  },
};

const Template = (args) => ({
  components: { StoveButton: StoveButton },
  setup() {
    return { args };
  },
  template: '<stove-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
  fullWidth: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Secondary Button',
  fullWidth: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  label: 'Ghost Button',
  fullWidth: false,
};
