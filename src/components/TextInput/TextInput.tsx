import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { Control, useController } from 'react-hook-form';

type Props = {
  label?: string;
  name: string;
  control: Control<any>;
  helperText?: string;
  mask?: string;
} & InputProps;

export const TextInput = ({
  label,
  name,
  control,
  helperText,
  type,
  w,
  width,
  maxW,
  maxWidth,
  ...rest
}: Props) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const dimensions = { w, width, maxW, maxWidth };
  const invalid = !!error?.message;
  return (
    <FormControl isInvalid={invalid} {...dimensions}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Input
        id={name}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={invalid}
        type={type}
        w={w}
        {...rest}
      />

      {invalid && <FormErrorMessage>{error?.message}</FormErrorMessage>}
      {!invalid && helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
