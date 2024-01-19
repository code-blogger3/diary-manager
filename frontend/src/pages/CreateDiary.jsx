import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { Select } from "../components/Select";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../redux/diary/diarySlice";

function CreateDiary() {
  const { category } = useSelector((state) => state.diary);
  const [multipleCategoryValue, setMultipleCategoryValue] = useState([]);
  const [singleCategory, setSingleCategory] = useState("");
  const dispatch = useDispatch();
  console.log(category);
  // dispatch(addCategory({ label: singleCategory })
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
            <Input
              type="text"
              name="category"
              value={singleCategory}
              onChange={(e) => setSingleCategory(e.target.value)}
            />
            <Button
              onClick={() =>
                setMultipleCategoryValue((prev) => [
                  ...prev,
                  { label: singleCategory },
                ])
              }
            >
              Add
            </Button>
          </FormControl>
          <Select
            onChange={(o) => setMultipleCategoryValue(o)}
            options={category}
            value={multipleCategoryValue}
          />
        </Form>
      </Container>
    </>
  );
}

export default CreateDiary;
