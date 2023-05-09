import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof TextInput> = {
  title: 'TextInput',
  component: TextInput,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args) => {
    const formControl = useForm();
    return (
      <form>
        <TextInput {...args} control={formControl.control} />
      </form>
    );
  },
};

Default.args = {
  label: 'Book Title',
  name: 'title',
  type: 'text',
};
