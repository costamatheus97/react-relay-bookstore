import { render, renderHook, fireEvent } from '@testing-library/react';
import { TextInput } from './TextInput';
import { useForm } from 'react-hook-form';

test('renders TextInput and checks if it reacts to user input', () => {
  const { result } = renderHook(() => useForm());
  const { getByLabelText } = render(
    <form>
      <TextInput
        label="Book Title"
        name="title"
        control={result.current.control}
      />
    </form>,
  );

  const input = getByLabelText('Book Title') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'Harry Potter' } });
  expect(input.value).toBe('Harry Potter');
});

test('checks if TextInput displays error message', async () => {
  const { result } = renderHook(() =>
    useForm({
      defaultValues: { title: '' },
      mode: 'onChange',
    }),
  );

  const { findByText } = render(
    <form>
      <TextInput
        label="Book Title"
        name="title"
        control={result.current.control}
      />
    </form>,
  );

  result.current.setError('title', {
    type: 'custom',
    message: 'Title is required',
  });

  const errorMessage = await findByText('Title is required');
  expect(errorMessage).toBeInTheDocument();
});

test('checks if TextInput displays the correct label', () => {
  const { result } = renderHook(() => useForm());
  const { getByText } = render(
    <form>
      <TextInput
        label="Book Title"
        name="title"
        control={result.current.control}
      />
    </form>,
  );

  const label = getByText('Book Title');
  expect(label).toBeInTheDocument();
});
