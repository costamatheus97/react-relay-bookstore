import { RelayEnvironmentProvider } from 'react-relay';
import { RelayEnvironment } from './RelayEnvironment';
import { Suspense } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AppRouter from './router';

const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <ChakraProvider>
          <AppRouter />
        </ChakraProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
