import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'react-relay';
import { BookListItem_book$data } from './__generated__/BookListItem_book.graphql';

type BookItemProps = {
  book: BookListItem_book$data;
};

const BookListItem = ({ book }: BookItemProps) => (
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
          <Text mt={2} fontSize="lg" fontWeight="bold">{`$${book.price}`}</Text>
        </CardBody>
      </Box>
    </Flex>
  </Card>
);

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
