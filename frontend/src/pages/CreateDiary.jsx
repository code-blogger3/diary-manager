import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

function CreateDiary() {
  return (
    <>
      <Container pt={10}>
        <Form>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" />
          </FormControl>
          <FormControl>
            <FormLabel>Content</FormLabel>
            <Textarea placeholder="Write how your day went" name="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Category</FormLabel>
          </FormControl>
        </Form>
      </Container>
    </>
  );
}

export default CreateDiary;
