import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <Box>
      <Box bg="teal.500" w="100%" p={4} color="white">
        <Flex
          maxW={'1280px'}
          w={'100%'}
          align="center"
          justify="space-between"
          margin={'0 auto'}
        >
          <Link fontSize={'24px'} as={RouterLink} to="/">
            book.store
          </Link>
        </Flex>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export const withHeader = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  return (props: P) => (
    <Header>
      <Component {...props} />
    </Header>
  );
};

export default Header;
