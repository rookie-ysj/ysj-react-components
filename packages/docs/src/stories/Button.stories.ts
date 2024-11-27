import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from 'react-components';

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    // type: {
    //   control: { type: "select" },
    //   options: ["primary", "success", "warning", "danger", "info", ""],
    // },
  },
  args: { onClick: fn() },
};

export default meta