import {
  Box,
  Button,
  Heading,
  Text,
  css,
  Spinner,
  Flex,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { BookList } from '../components/BookList/BookList';
import { Suspense } from 'react';
import { withHeader } from '../layouts/Header/Header';
import { CreateBookModal } from '../components/CreateBook/CreateBookModal';

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        height="60vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        color="white"
        textAlign="center"
        position="relative"
        overflow="hidden"
        css={css({
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1575220360526-be964710f279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(50%)',
          },
        })}
      >
        <Box zIndex={1}>
          <Heading as={'h1'} size="2xl">
            Welcome to our Bookstore!
          </Heading>
          <Text mt={4} fontSize="xl">
            Whether you're a fan of fantasy, mystery, romance, self-help or any
            genre in between, we've got you covered.
          </Text>
          <Button onClick={onOpen} colorScheme="blue" mt={6} size="lg">
            Create a Book
          </Button>
        </Box>
      </Box>

      <Box maxW="container.xl" mx="auto" p={8}>
        <VStack spacing={8} align="start">
          <Box width={'100%'}>
            <Heading as={'h2'} size="xl" textAlign={'center'}>
              Featured Books
            </Heading>
            <Suspense
              fallback={
                <Flex justify={'center'} align={'center'} margin={'2rem 0'}>
                  <Spinner />
                </Flex>
              }
            >
              <BookList />
            </Suspense>
          </Box>
        </VStack>
      </Box>
      <CreateBookModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default withHeader(Home);
