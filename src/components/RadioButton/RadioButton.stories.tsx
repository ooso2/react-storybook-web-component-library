import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: 'group1',
    label: 'Option A',
    value: 'A',
    checked: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    name: 'group1',
    label: 'Option B',
    value: 'B',
    checked: false,
    disabled: true,
  },
};
