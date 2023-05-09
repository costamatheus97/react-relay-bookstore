import { useForm } from 'react-hook-form';
import { useMutation } from 'react-relay/hooks';
import { Box, Button } from '@chakra-ui/react';
import { graphql } from 'react-relay';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateBookForm_Mutation } from './__generated__/CreateBookForm_Mutation.graphql';
import { TextInput } from '../../TextInput/TextInput';

const formSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  author: z.string().min(1, { message: 'Author is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  price: z.string().min(1, { message: 'Price is required' }),
  cover: z.string().min(1, { message: 'Title is required' }),
});

type FormSchema = z.infer<typeof formSchema>;

type FormProps = {
  onClose: () => void;
};

const mutation = graphql`
  mutation CreateBookForm_Mutation($input: BookInput!) {
    createBook(payload: $input) {
      id
      title
      author
      description
      price
      cover
    }
  }
`;

const CreateBookForm = ({ onClose }: FormProps) => {
  const { handleSubmit, reset, control } = useForm<FormSchema>({
    defaultValues: {
      title: '',
      author: '',
      description: '',
      price: '',
      cover: '',
    },
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  });
  const [commit, isInFlight] = useMutation<CreateBookForm_Mutation>(mutation);

  const onSubmit = handleSubmit((data) => {
    const { price, ...rest } = data;

    commit({
      variables: {
        input: {
          ...rest,
          price: Number(price),
        },
      },
      onCompleted: () => {
        reset();
        onClose();
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <Box py={2}>
        <TextInput control={control} name="title" label="Title" type="text" />
      </Box>
      <Box py={2}>
        <TextInput control={control} name="author" label="Author" type="text" />
      </Box>
      <Box py={2}>
        <TextInput
          control={control}
          name="description"
          label="Description"
          type="text"
        />
      </Box>
      <Box py={2}>
        <TextInput control={control} name="price" label="Price" type="text" />
      </Box>
      <Box py={2}>
        <TextInput
          control={control}
          name="cover"
          label="Cover URL"
          type="text"
        />
      </Box>
      <Button
        display={'flex'}
        w={'128px'}
        margin={'1rem auto'}
        colorScheme="green"
        type="submit"
        isLoading={isInFlight}
      >
        Save
      </Button>
    </form>
  );
};

export default CreateBookForm;
