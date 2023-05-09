import { render, screen } from '@testing-library/react';
import { CreateBookModal } from './CreateBookModal';
import { Button, useDisclosure } from '@chakra-ui/react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { createMockEnvironment } from 'relay-test-utils';
import { vi } from 'vitest';

global.jest = vi;

describe('CreateBookModal', () => {
  test('Modal should not be visible at first', () => {
    const TestComponent = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();

      return (
        <>
          <Button onClick={onOpen}>Open Modal</Button>
          <CreateBookModal isOpen={isOpen} onClose={onClose} />
        </>
      );
    };

    const mockEnvironment = createMockEnvironment();

    render(
      <RelayEnvironmentProvider environment={mockEnvironment}>
        <TestComponent />
      </RelayEnvironmentProvider>,
    );

    expect(screen.queryByText('Create new book')).not.toBeInTheDocument();
  });
});
