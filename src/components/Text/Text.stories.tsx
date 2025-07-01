import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    content: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: 'Hello, Storybook!',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    content: 'Small Text',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    content: 'Large Text',
    size: 'large',
  },
};
