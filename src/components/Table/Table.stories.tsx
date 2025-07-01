import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: { control: 'array' },
    data: { control: 'object' },
    footer: { control: 'array' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ['Name', 'Age', 'Occupation'],
    data: [
      ['John', '28', 'Engineer'],
      ['Jane', '32', 'Designer'],
    ],
    footer: ['Total', '', '2'],
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    headers: ['Name', 'Age'],
    data: [['Mark', '40']],
    disabled: true,
  },
};
