import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckboxComponent } from './checkbox.component';
import { MultiCheckboxState } from './checkbox.model';

export default {
  title: 'Component Library/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<CheckboxComponent> = (args: CheckboxComponent) => ({
  props: args,
});

export const Full = Template.bind({});

Full.args = {
    state: MultiCheckboxState.Full,
};

export const Partial = Template.bind({});

Partial.args = {
    state: MultiCheckboxState.Partial,
};

export const Empty = Template.bind({});

Empty.args = {
    state: MultiCheckboxState.Empty,
};

