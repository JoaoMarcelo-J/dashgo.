import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChackraInputProps,
} from "@chakra-ui/react";

import { FieldError } from "react-hook-form";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export const Input = ({ name, label, error = null, ...rest }: InputProps) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};
