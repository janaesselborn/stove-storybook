import StoveIconInformationCircle from "./IconInformationCircle";

export default {
  title: 'Atom/Icons/InformationCircle',
  component: StoveIconInformationCircle,
};

const Template = () => ({
  components: { StoveIconInformationCircle: StoveIconInformationCircle },
  template: '<stove-icon-information-circle style="width:28px; height: 28px;"/>',
});

export const InformationCircle = Template.bind({});
