import { usePreloadedQuery, loadQuery } from 'react-relay/hooks';
import { graphql } from 'react-relay';

import BookListItem from './BookListItem';
import { BookList_Query } from './__generated__/BookList_Query.graphql';
import { RelayEnvironment } from '../../RelayEnvironment';
import { Box, Text, VStack, SimpleGrid } from '@chakra-ui/react';

const bookListQuery = graphql`
  query BookList_Query {
    getBooks {
      ...BookListItem_book
    }
  }
`;

const preloadedQuery = loadQuery<BookList_Query>(
  RelayEnvironment,
  bookListQuery,
  {},
);

export const BookList: React.FC = () => {
  const data = usePreloadedQuery<BookList_Query>(bookListQuery, preloadedQuery);

  return (
    <Box w={'100%'} p={8}>
      <VStack spacing={8} align="start" width={'100%'} alignItems={'center'}>
        {data.getBooks?.length ? (
          <SimpleGrid columns={[1, null, 2]} spacing={10} mt={6}>
            {data.getBooks.map(
              (book: any) =>
                book && <BookListItem key={book.id} book={book!} />,
            )}
          </SimpleGrid>
        ) : (
          <Text fontSize={'16px'} textAlign={'center'}>
            No books found.
          </Text>
        )}
      </VStack>
    </Box>
  );
};
