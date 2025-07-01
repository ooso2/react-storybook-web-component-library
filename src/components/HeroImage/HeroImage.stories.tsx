import React from 'react';
import { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImage } from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://via.placeholder.com/800x300',
    alt: 'Hero Banner',
    height: '300px',
  },
};
