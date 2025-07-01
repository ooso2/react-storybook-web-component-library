import React from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';
import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Username:',
};
