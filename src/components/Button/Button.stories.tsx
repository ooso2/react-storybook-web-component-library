import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    disabled: false,
    backgroundColor: '#007bff',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    backgroundColor: '#007bff',
  },
};
