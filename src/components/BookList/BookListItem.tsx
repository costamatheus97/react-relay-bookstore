import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { createFragmentContainer, useMutation } from 'react-relay';
import { graphql } from 'react-relay';
import TrashCanIcon from '../../assets/TrashCanIcon';
import { BookListItem_book$data } from './__generated__/BookListItem_book.graphql';
import { BookListItem_Mutation } from './__generated__/BookListItem_Mutation.graphql';

type BookItemProps = {
  book: BookListItem_book$data;
};

const mutation = graphql`
  mutation BookListItem_Mutation($input: ID!) {
    deleteBook(id: $input)
  }
`;

const BookListItem = ({ book }: BookItemProps) => {
  const [commit, isInFlight] = useMutation<BookListItem_Mutation>(mutation);

  const handleDelete = useCallback(
    (id: string) => {
      commit({
        variables: {
          input: id,
        },
        updater: (store) => {
          const root = store.getRoot();
          const books = root.getLinkedRecords('getBooks');
          const newBooks = books.filter((book) => book.getDataID() !== id);
          root.setLinkedRecords(newBooks, 'getBooks');
        },
      });
    },
    [book.id],
  );

  return (
    <Card borderRadius="lg" overflow="hidden" boxShadow="lg" bg="white">
      <Flex align={'center'}>
        <Box flexShrink={0}>
          <Avatar size="2xl" name={book.title!} src={book.cover!} m={3} />
        </Box>
        <Box p={5}>
          <CardHeader>
            <Heading as="h2" size="md">
              {book.title}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="sm" color="gray.500">
              {book.author}
            </Text>
            <Text mt={2}>{book.description}</Text>
            <Text
              mt={2}
              fontSize="lg"
              fontWeight="bold"
            >{`$${book.price}`}</Text>
          </CardBody>
        </Box>
        <IconButton
          onClick={() => handleDelete(book.id!)}
          icon={<TrashCanIcon height="20px" width="14px" />}
          bg="transparent"
          minWidth={5}
          _hover={{ background: 'transparent' }}
          _active={{ background: 'transparent' }}
          mr={5}
          aria-label={''}
          isLoading={isInFlight}
        />
      </Flex>
    </Card>
  );
};

export default createFragmentContainer(BookListItem, {
  book: graphql`
    fragment BookListItem_book on Book {
      id
      title
      author
      description
      price
      cover
    }
  `,
});
